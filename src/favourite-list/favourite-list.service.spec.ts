import { Test, TestingModule } from '@nestjs/testing';
import { FavouriteListService } from './favourite-list.service';

describe('FavouriteListService', () => {
  let service: FavouriteListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavouriteListService],
    }).compile();

    service = module.get<FavouriteListService>(FavouriteListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
