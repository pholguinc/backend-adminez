// src/courses/dto/create-course.dto.ts
import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  codCurso: string;

  @IsString()
  nomCurso: string;

  @IsInt()
  idEntidad: number;

  @IsInt()
  idiomaCurso: number;

  @IsInt()
  idFranquicia: number;

  @IsInt()
  estCurso: number;
}
