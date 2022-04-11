import { Test, TestingModule } from '@nestjs/testing';
import { setSpecSystemEnviromentVariables } from '@utils/spec.utils';

import { CatController } from './cat.controller';
import { CatModule } from './cat.module';
import { CatRepository } from './cat.repository';
import { getCatSdkMock } from './cat.sdk.mock';

describe('[Cat] Integration Tests Spec', () => {
  let module: TestingModule;
  let catController: CatController;
  let catRepository: CatRepository;

  async function setModules(modules: Array<any>) {
    module = await Test.createTestingModule({
      imports: modules,
    }).compile();
  }

  function setControllers() {
    catController = module.get<CatController>(CatController);
  }

  function setProviders() {
    catRepository = module.get<CatRepository>(CatRepository);
  }

  beforeAll(async () => {
    await setSpecSystemEnviromentVariables();
    await setModules([CatModule]);

    setControllers();
    setProviders();
  });

  it('Expect modules to be defined', async () => {
    expect(module).toBeDefined();
  });

  it('Expect controllers to be defined', async () => {
    expect(catController).toBeDefined();
  });

  it('Expect providers to be defined', async () => {
    expect(catRepository).toBeDefined();
  });

  it('Expect route cats GET to return a list of cats, with a cat of id 1 ', async () => {
    jest.spyOn(catRepository, 'getCatSdk').mockReturnValue(getCatSdkMock);

    const cats = await catController.findAll('accessToken');

    expect(cats[0].id).toBeDefined();
    expect(cats[0].name).toBeDefined();
  });

});
