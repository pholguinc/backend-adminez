import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { DatabaseModule } from 'src/config/database.module';
import { CoursesController } from './courses.controller';

@Module({
  imports: [],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
