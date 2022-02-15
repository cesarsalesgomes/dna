import { Test, TestingModule } from '@nestjs/testing';
import { DirectusService } from '@system/directus/directus.service';
import { setSpecSystemEnviromentVariables } from '@utils/spec.utils';
import { CatController } from './cat.controller';
import { CatModule } from './cat.module';
import { findAllCatsMock } from './cat.mock';

describe('[Cat] Integration Tests Spec', () => {
  let module: TestingModule;
  let catController: CatController;
  let directusService: DirectusService;

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
    expect(directusService).toBeDefined();
  });

  it('Expect route cats GET to return a list of cats, with a cat of id 1 ', async () => {
    jest.spyOn(directusService, 'getSdk').mockReturnValue({
      findAllCats: findAllCatsMock,
    });

    const cats = await catController.findAll('accessToken');

    expect(cats[0].id).toBeDefined();
    expect(cats[0].name).toBeUndefined();
  });

  async function setModules(modules: Array<any>) {
    module = await Test.createTestingModule({
      imports: modules,
    }).compile();
  }

  function setControllers() {
    catController = module.get<CatController>(CatController);
  }

  function setProviders() {
    directusService = module.get<DirectusService>(DirectusService);
  }
});
