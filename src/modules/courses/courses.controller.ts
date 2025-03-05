import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { ListCoursesDto } from './dto/list-courses.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Post('list')
  async listCourses(@Body() listCoursesDto: ListCoursesDto) {
    const {
      page,
      page_limit,
      p_codigo,
      p_nomCurso,
      p_idEntidad,
      p_idiomaCurso,
      p_idFranquicia,
      p_estCurso,
    } = listCoursesDto;

    // Llamar al servicio para obtener los resultados
    const result = await this.coursesService.getPagedCourses(
      page,
      page_limit,
      p_codigo,
      p_nomCurso,
      p_idEntidad,
      p_idiomaCurso,
      p_idFranquicia,
      p_estCurso,
    );

    return result;
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(+id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(+id);
  }
}
