import { Inject, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Connection } from 'mysql2';

@Injectable()
export class CoursesService {
  constructor(
    @Inject('MYSQL_CONNECTION') private readonly connection: Connection, 
  ) {}
  
  create(createCourseDto: CreateCourseDto) {
    return 'This action adds a new course';
  }

  async getPagedCourses(
    page: number,
    page_limit: number,
    p_codigo?: string,
    p_nomCurso?: string,
    p_idEntidad?: number,
    p_idiomaCurso?: number,
    p_idFranquicia?: number,
    p_estCurso?: number,
  ) {
    try {
      const result = await this.connection.execute(
        'CALL SP_Listar_Cursos_Paginado(?, ?, ?, ?, ?, ?, ?, ?)',
        [
          page,
          page_limit,
          p_codigo,
          p_nomCurso,
          p_idEntidad,
          p_idiomaCurso,
          p_idFranquicia,
          p_estCurso,
        ],
      );
      return result[0];
    } catch (error) {
      console.error('Error al ejecutar el procedimiento almacenado', error);
      throw new Error('Error al ejecutar el procedimiento almacenado');
    }
  }

  async findAll() {
    try {
      const result = await this.connection.execute(
        'SELECT * FROM curso',
      );

      return result[0];
    } catch (error) {
      console.error('Error al ejecutar el procedimiento almacenado', error);
      throw new Error('Error al ejecutar el procedimiento almacenado');
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
