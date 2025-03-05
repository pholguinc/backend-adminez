import { Inject } from "@nestjs/common";
import { CoursesModel } from "src/domain/models/courses.model";
import { CoursesRepositoryPort } from "src/domain/repositories/courses.repository.port";

export class ListCoursesPaginateUseCase {
    constructor(
        @Inject('CoursesRepository') private coursesRepository: CoursesRepositoryPort,
      ) {}
    async execute(courses: CoursesModel) {
        const coursesList = await this.coursesRepository.listCoursesPaginate(courses);
        return coursesList;
    }
}