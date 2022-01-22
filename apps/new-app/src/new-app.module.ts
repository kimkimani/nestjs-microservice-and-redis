import { Module } from '@nestjs/common';
import { NewAppController } from './new-app.controller';
import { NewAppService } from './new-app.service';

@Module({
  imports: [],
  controllers: [NewAppController],
  providers: [NewAppService],
})
export class NewAppModule {}
