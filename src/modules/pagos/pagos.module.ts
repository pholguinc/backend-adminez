import { Module } from '@nestjs/common';
import { PagosController } from './controllers/pagos.controller';
import { PagosService } from './services/pagos.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [PagosController],
  providers: [PagosService],
})
export class PagosModule {}
