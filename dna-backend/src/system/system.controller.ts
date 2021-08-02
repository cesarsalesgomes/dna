import { Controller, Get } from '@nestjs/common';
import { SystemService } from './system.service';

@Controller('system')
export class SystemController {
  constructor(private readonly systemService: SystemService) { }

  @Get('authenticate')
  async authenticate() {
    const { data } = await this.systemService.authenticate().toPromise();

    return data;
  }
}
