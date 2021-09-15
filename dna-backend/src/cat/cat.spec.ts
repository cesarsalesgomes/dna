import { Test, TestingModule } from '@nestjs/testing';
import { CatController } from './cat.controller';
import { CatRepository } from './cat.repository';
import { CatService } from './cat.service';

describe('Cat Spec', () => {
  let controller: CatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatController],
      providers: [CatService, CatRepository],
    }).compile();

    controller = module.get<CatController>(CatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
