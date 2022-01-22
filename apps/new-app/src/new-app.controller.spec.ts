import { Test, TestingModule } from '@nestjs/testing';
import { NewAppController } from './new-app.controller';
import { NewAppService } from './new-app.service';

describe('NewAppController', () => {
  let newAppController: NewAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NewAppController],
      providers: [NewAppService],
    }).compile();

    newAppController = app.get<NewAppController>(NewAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(newAppController.getHello()).toBe('Hello World!');
    });
  });
});
