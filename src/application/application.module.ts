/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ListCoursesPaginateUseCase } from './use-cases/list-courses-paginate.usecase';
import { CoursesRepositoryAdapter } from 'src/infrastructure/repositories/courses.repository.adapter';

@Module({
  imports: [],
  controllers: [],
  providers: [
    ListCoursesPaginateUseCase,
    {
        provide: 'CoursesRepository',
        useClass: CoursesRepositoryAdapter,
    }
  ],
  exports: [ListCoursesPaginateUseCase],
})
export class ApplicationModule {}
