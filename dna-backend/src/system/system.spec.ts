import { Test } from '@nestjs/testing';
import {
  EnviromentVariableDirectusPortNotDefinedException,
  EnviromentVariableDockerDnaIPV4NotDefinedException,
  EnviromentVariableDockerDnaDirectusAccessTokenNotDefinedException,
} from '@system/directus/directus.exception';
import { SystemModule } from './system.module';

describe('[System] Unit Tests Spec', () => {
  const processEnv = { ...process.env };

  it('Expected to throw EnviromentVariableDockerDnaIPV4NotDefined exception', async () => {
    setSystemEnviromentVariables(false, false, false);

    expect(createSystemModuleOnFunction()()).rejects.toThrowError(
      EnviromentVariableDockerDnaIPV4NotDefinedException,
    );
  });

  it('Expected to throw EnviromentVariableDirectusPortNotDefined exception', async () => {
    setSystemEnviromentVariables(true, false, false);

    expect(createSystemModuleOnFunction()()).rejects.toThrowError(
      EnviromentVariableDirectusPortNotDefinedException,
    );
  });

  it('Expected to throw EnviromentVariableDockerDnaIPV4NotDefined exception', async () => {
    setSystemEnviromentVariables(true, true, false);

    expect(createSystemModuleOnFunction()()).rejects.toThrowError(
      EnviromentVariableDockerDnaDirectusAccessTokenNotDefinedException,
    );
  });

  it('Expected not to throw exception', async () => {
    setSystemEnviromentVariables(true, true, true);

    expect(createSystemModuleOnFunction()()).toBeDefined();
  });

  function createSystemModuleOnFunction() {
    return async () => {
      await Test.createTestingModule({
        imports: [SystemModule],
      }).compile();
    };
  }

  function setSystemEnviromentVariables(
    setIpv4Directus: boolean,
    setDirectusPort: boolean,
    setDirectusAccessToken: boolean,
  ) {
    resetEnviromentVariables();

    if (setIpv4Directus) process.env.DOCKER_DNA_IPV4_DIRECTUS = 'defined';
    if (setDirectusPort) process.env.DIRECTUS_PORT = 'defined';
    if (setDirectusAccessToken)
      process.env.DOCKER_DNA_DIRECTUS_ACCESS_TOKEN = 'defined';
  }

  function resetEnviromentVariables() {
    process.env = { ...processEnv };
  }
});
