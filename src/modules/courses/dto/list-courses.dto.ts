// src/courses/dto/list-courses.dto.ts
import { IsInt, IsOptional, IsString } from 'class-validator';

export class ListCoursesDto {
  @IsInt()
  page: number;

  @IsInt()
  page_limit: number;

  @IsOptional()
  @IsString()
  p_codigo?: string;

  @IsOptional()
  @IsString()
  p_nomCurso?: string;

  @IsOptional()
  @IsInt()
  p_idEntidad?: number;

  @IsOptional()
  @IsInt()
  p_idiomaCurso?: number;

  @IsOptional()
  @IsInt()
  p_idFranquicia?: number;

  @IsOptional()
  @IsInt()
  p_estCurso?: number;
}
