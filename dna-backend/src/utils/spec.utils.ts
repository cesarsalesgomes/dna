import { Injectable } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

@Injectable()
export class SpecUtils {
  private enviromentVariables: NodeJS.ProcessEnv;

  constructor() {
    this.storeEnviromentVariables();
  }

  private storeEnviromentVariables() {
    this.enviromentVariables = { ...process.env };
  }

  public setSystemEnviromentVariables(
    setIpv4Directus: boolean,
    setDirectusPort: boolean,
    setDirectusAccessToken: boolean,
  ) {
    this.resetEnviromentVariables();

    if (setIpv4Directus) process.env.DOCKER_DNA_IPV4_DIRECTUS = 'defined';
    if (setDirectusPort) process.env.DIRECTUS_PORT = 'defined';
    if (setDirectusAccessToken)
      process.env.DOCKER_DNA_DIRECTUS_ACCESS_TOKEN = 'defined';
  }

  private resetEnviromentVariables() {
    process.env = { ...this.enviromentVariables };
  }
}

export function createTestingModule(modules: Array<any>) {
  return Test.createTestingModule({
    imports: modules,
  }).compile();
}

export function createTestingModuleOnInnerFunction(modules: Array<any>) {
  return () => createTestingModule(modules);
}

export async function setSpecSystemEnviromentVariables(
  setIpv4Directus = true,
  setDirectusPort = true,
  setDirectusAccessToken = true,
) {
  const module: TestingModule = await Test.createTestingModule({
    providers: [SpecUtils],
  }).compile();

  const specUtils = module.get<SpecUtils>(SpecUtils);

  specUtils.setSystemEnviromentVariables(
    setIpv4Directus,
    setDirectusPort,
    setDirectusAccessToken,
  );
}
