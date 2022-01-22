import { NestFactory } from '@nestjs/core';
import { NewAppModule } from './new-app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(NewAppModule, {
    transport: Transport.REDIS, //setting transporter
    options: {
      url: 'redis://localhost:6379',
    },
  });
  await app.listen();
}
bootstrap();