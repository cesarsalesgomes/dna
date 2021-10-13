import {
  EnviromentVariableDirectusPortNotDefinedException,
  EnviromentVariableDockerDnaIPV4NotDefinedException,
} from '@system/directus/directus.exception';
import { createTestingModuleOnInnerFunction, setSpecSystemEnviromentVariables } from '@utils/spec.utils';
import { SystemModule } from './system.module';
import { Test, TestingModule } from '@nestjs/testing';
import { CatController } from '../cat/cat.controller';
import { CatModule } from '../cat/cat.module';

describe('[System] Unit Tests Spec', () => {
  let module: TestingModule;

  it('Expected to throw EnviromentVariableDockerDnaIPV4NotDefined exception', async () => {
    await setSpecSystemEnviromentVariables(false, false);
    await setModules([CatModule]);

    const catController = module.get<CatController>(CatController);

    expect(catController.findAll('accessToken')).rejects.toThrowError(EnviromentVariableDockerDnaIPV4NotDefinedException);
  });

  it('Expected to throw EnviromentVariableDirectusPortNotDefined exception', async () => {
    await setSpecSystemEnviromentVariables(true, false);
    await setModules([CatModule]);

    const catController = module.get<CatController>(CatController);

    expect(catController.findAll('accessToken')).rejects.toThrowError(EnviromentVariableDirectusPortNotDefinedException);
  });

  it('Expect to create system module without errors', async () => {
    await setSpecSystemEnviromentVariables(true, true);

    expect(createTestingModuleOnInnerFunction([SystemModule])()).toBeDefined();
  });

  async function setModules(modules: Array<any>) {
    module = await Test.createTestingModule({
      imports: modules,
    }).compile();
  }
});
