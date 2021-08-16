import { Test, TestingModule } from '@nestjs/testing';
import { DirectusService } from './directus.service';

describe('DirectusService', () => {
  let service: DirectusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DirectusService],
    }).compile();

    service = module.get<DirectusService>(DirectusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
