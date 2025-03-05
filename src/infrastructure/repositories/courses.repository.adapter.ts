import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/config/database.service";
import { CoursesModel } from "src/domain/models/courses.model";
import { CoursesRepositoryPort } from "src/domain/repositories/courses.repository.port";

@Injectable()    
export class CoursesRepositoryAdapter implements CoursesRepositoryPort {
    constructor(private databaseService: DatabaseService) {}

    async listCoursesPaginate(courses: CoursesModel): Promise<CoursesModel> {
        const parameters = [
            courses.page ?? 1,                
            courses.page_limit ?? 10,         
            courses.codCurso ?? '',
            courses.nomCurso ?? null,
            courses.idEntidad ?? null,
            courses.idiomaCurso ?? null,
            courses.idFranquicia ?? null,
            courses.estCurso ?? null,
          ];

        const result = await this.databaseService.query(
            'CALL SP_Listar_Cursos_Paginado(?, ?, ?, ?, ?, ?, ?, ?)', parameters
        );
 const data = result[0].map(course => {
    const idFranquicia = Array.isArray(course.idFranquicia) ? course.idFranquicia : [];

    if (typeof course.idFranquicia === 'string') {
        try {
            const parsed = JSON.parse(course.idFranquicia);
            if (Array.isArray(parsed)) {
                return {
                    ...course,
                    idFranquicia: parsed.map(id => String(id))  // Aseguramos que sean cadenas
                };
            }
        } catch (error) {
            return {
                ...course,
                idFranquicia: []
            };
        }
    }

    return {
        ...course,
        idFranquicia: idFranquicia.map(id => String(id))
    };
});

return data;
}
}