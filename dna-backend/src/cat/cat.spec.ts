import { Test, TestingModule } from '@nestjs/testing';
import { CatController } from './cat.controller';
import { CatModule } from './cat.module';

describe('Cat Spec', () => {
  let controller: CatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CatModule],
    }).compile();

    controller = module.get<CatController>(CatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
