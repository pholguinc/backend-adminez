/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller,HttpStatus,Post,Res } from '@nestjs/common';
import { Response } from 'express';
import { ListCoursesPaginateUseCase } from 'src/application/use-cases/list-courses-paginate.usecase';
import { CoursesPaginateDTO } from '../dto/courses-list-paginate.dto';
import { CoursesModel } from 'src/domain/models/courses.model';

@Controller('courses2')
export class CoursesController {

    constructor(private listCoursesPaginateUseCase: ListCoursesPaginateUseCase) {}

    @Post('list')
    async listCourses(@Res() response: Response, @Body() courses: CoursesModel) {
        
        try {
            const coursesList = await this.listCoursesPaginateUseCase.execute(courses);
            return response.status(HttpStatus.OK).json(coursesList);
        } catch (error) {
            return response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal Server Error', error: error.message });
        }

    }
}
