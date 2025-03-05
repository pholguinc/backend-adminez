import { CoursesModel } from "../models/courses.model";

export interface CoursesRepositoryPort{

    listCoursesPaginate(courses: CoursesModel): Promise<CoursesModel>;  

}