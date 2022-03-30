import { catByIdMock, findAllCatsMock } from '@features/cat/cat.mock';
import { findRestaurantMock, updateRestaurantMock } from '@features/restaurant/restaurant.mock';
import { Injectable } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Sdk } from '@system/directus/sdk/directus.sdk';

@Injectable()
export class SpecUtils {
  private enviromentVariables: NodeJS.ProcessEnv;

  constructor() {
    this.storeEnviromentVariables();
  }

  private storeEnviromentVariables() {
    this.enviromentVariables = { ...process.env };
  }

  public setSystemEnviromentVariables(setIpv4Directus: boolean) {
    this.resetEnviromentVariables();

    if (setIpv4Directus) process.env.DIRECTUS_IPV4 = 'defined';
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

export async function setSpecSystemEnviromentVariables(setDirectusIPV4 = true) {
  const module: TestingModule = await Test.createTestingModule({
    providers: [SpecUtils],
  }).compile();

  const specUtils = module.get<SpecUtils>(SpecUtils);

  specUtils.setSystemEnviromentVariables(setDirectusIPV4);
}

export const getSdkMock: Sdk = {
  findAllCats: findAllCatsMock,
  catById: catByIdMock,
  updateRestaurant: updateRestaurantMock,
  findRestaurant: findRestaurantMock
};