/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ApplicationModule } from 'src/application/application.module';
import { DatabaseModule } from 'src/config/database.module';
import { CoursesController } from './controllers/courses.controller';

@Module({
    imports: [ApplicationModule,DatabaseModule],
    controllers: [CoursesController],
    providers: [],
})
export class InfrastructureModule {}
