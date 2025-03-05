import { IsOptional, IsString, IsInt } from 'class-validator';
import { Transform } from 'class-transformer';

export class CoursesPaginateDTO {
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => value ?? null) 
  page: number;

  @IsOptional()
  @IsInt()
  @Transform(({ value }) => value ?? null)  
  page_limit: number;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value ?? null)  

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value ?? null)  
  nomCurso: string;

  @IsOptional()
  @IsInt()
  @Transform(({ value }) => value ?? null)  
  idEntidad: number;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value ?? null)  
  idiomaCurso: string;

  @IsOptional()
  @IsInt()
  @Transform(({ value }) => value ?? null)  
  idFranquicia: number;

  @IsOptional()
  @IsInt()
  @Transform(({ value }) => value ?? null) 
  estCurso: number;
}
