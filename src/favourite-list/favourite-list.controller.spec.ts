import { Test, TestingModule } from '@nestjs/testing';
import { FavouriteListController } from './favourite-list.controller';

describe('FavouriteListController', () => {
  let controller: FavouriteListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavouriteListController],
    }).compile();

    controller = module.get<FavouriteListController>(FavouriteListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
