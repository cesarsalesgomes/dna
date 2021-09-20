import {
  EnviromentVariableDirectusPortNotDefinedException,
  EnviromentVariableDockerDnaIPV4NotDefinedException,
  EnviromentVariableDockerDnaDirectusAccessTokenNotDefinedException,
} from '@system/directus/directus.exception';
import {
  createTestingModuleOnInnerFunction,
  setSpecSystemEnviromentVariables,
} from '@utils/spec.utils';
import { SystemModule } from './system.module';

describe('[System] Unit Tests Spec', () => {
  it('Expected to throw EnviromentVariableDockerDnaIPV4NotDefined exception', async () => {
    await setSpecSystemEnviromentVariables(false, false, false);

    expect(
      createTestingModuleOnInnerFunction([SystemModule])(),
    ).rejects.toThrowError(EnviromentVariableDockerDnaIPV4NotDefinedException);
  });

  it('Expected to throw EnviromentVariableDirectusPortNotDefined exception', async () => {
    await setSpecSystemEnviromentVariables(true, false, false);

    expect(
      createTestingModuleOnInnerFunction([SystemModule])(),
    ).rejects.toThrowError(EnviromentVariableDirectusPortNotDefinedException);
  });

  it('Expected to throw EnviromentVariableDockerDnaIPV4NotDefined exception', async () => {
    await setSpecSystemEnviromentVariables(true, true, false);

    expect(
      createTestingModuleOnInnerFunction([SystemModule])(),
    ).rejects.toThrowError(
      EnviromentVariableDockerDnaDirectusAccessTokenNotDefinedException,
    );
  });

  it('Expect to create system module without errors', async () => {
    await setSpecSystemEnviromentVariables(true, true, true);

    expect(createTestingModuleOnInnerFunction([SystemModule])()).toBeDefined();
  });
});
