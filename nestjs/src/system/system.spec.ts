import { Test, TestingModule } from '@nestjs/testing';
import { EnviromentVariableDirectusIPNotDefinedException } from '@system/directus/directus.exception';
import { createTestingModuleOnInnerFunction, setSpecSystemEnviromentVariables } from '@utils/spec.utils';

import { CatController } from '../features/cat/cat.controller';
import { CatModule } from '../features/cat/cat.module';

import { SystemModule } from './system.module';

describe('[System] Unit Tests Spec', () => {
  let module: TestingModule;

  async function setModules(modules: Array<any>) {
    module = await Test.createTestingModule({
      imports: modules,
    }).compile();
  }

  it('Expected to throw EnviromentVariableDirectusIPNotDefined exception', async () => {
    await setSpecSystemEnviromentVariables(false);
    await setModules([CatModule]);

    const catController = module.get<CatController>(CatController);

    expect(catController.findAll('accessToken')).rejects.toThrowError(EnviromentVariableDirectusIPNotDefinedException);
  });

  it('Expect to create system module without errors', async () => {
    await setSpecSystemEnviromentVariables(true);

    expect(createTestingModuleOnInnerFunction([SystemModule])()).toBeDefined();
  });

});
