import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { AddMovieDto } from './dto/addmovie.dto';
import { FavouriteListService } from './favourite-list.service';
import { Movie } from './interfaces/movie.interface';

@Controller('myList')
export class FavouriteListController {
  constructor(private readonly favList: FavouriteListService) {}

  //get all list item by logged in user email
  @Get('filter')
  findMyList(@Query() query: { email: string }): Promise<Movie[]> {
    return this.favList.findMyList(query.email);
  }

  @Post()
  create(@Body() AddMovieDto: AddMovieDto): Promise<Movie> {
    return this.favList.create(AddMovieDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Movie> {
    return this.favList.delete(id);
  }
}
