import { Test, TestingModule } from '@nestjs/testing';
import { PagosController } from '../controllers/pagos.controller';
import { PagosService } from '../services/pagos.service';

describe('PagosController', () => {
  let controller: PagosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PagosController],
      providers: [PagosService],
    }).compile();

    controller = module.get<PagosController>(PagosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
