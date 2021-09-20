import { Test, TestingModule } from '@nestjs/testing';
import { setSpecSystemEnviromentVariables } from '@utils/spec.utils';
import { CatController } from './cat.controller';
import { CatModule } from './cat.module';

describe('[Cat] Integration Tests Spec', () => {
  let controller: CatController;

  beforeAll(async () => {
    await setSpecSystemEnviromentVariables();
    await setCatController();
  });

  it('Cat controller defined', async () => {
    expect(controller).toBeDefined();
  });

  async function setCatController() {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CatModule],
    }).compile();

    controller = module.get<CatController>(CatController);
  }
});
