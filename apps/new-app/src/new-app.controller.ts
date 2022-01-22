import { Controller, Get } from '@nestjs/common';
import { NewAppService } from './new-app.service';

@Controller()
export class NewAppController {
  constructor(private readonly newAppService: NewAppService) {}

  @Get()
  getHello(): string {
    return this.newAppService.getHello();
  }
}
