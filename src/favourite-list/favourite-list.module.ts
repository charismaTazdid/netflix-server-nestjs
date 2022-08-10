import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FavouriteListController } from './favourite-list.controller';
import { FavouriteListService } from './favourite-list.service';
import { movieSchema } from './schemas/movie.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'favListCollection', schema: movieSchema },
    ]),
  ],
  controllers: [FavouriteListController],
  providers: [FavouriteListService],
})
export class FavouriteListModule {}
