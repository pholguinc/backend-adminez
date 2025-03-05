import { DomainModule } from './domain/domain.module';
import { ApplicationModule } from './application/application.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './modules/courses/courses.module';
import { DatabaseModule } from './config/database.module';
import { PagosModule } from './modules/pagos/pagos.module';

@Module({
  imports: [
    DomainModule,
    ApplicationModule,
    InfrastructureModule,
    CoursesModule,
    DatabaseModule,
    PagosModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
