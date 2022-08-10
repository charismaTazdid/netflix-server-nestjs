import { Injectable } from '@nestjs/common';
import { Movie } from './interfaces/movie.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class FavouriteListService {
  constructor(
    @InjectModel('favListCollection') private readonly itemModel: Model<Movie>,
  ) {}
  //get my list
  async findMyList(email: string): Promise<Movie[]> {
    return await this.itemModel.find({ userEamil: email });
  }

  async create(item: Movie): Promise<Movie> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async delete(id: string): Promise<Movie> {
    return await this.itemModel.findByIdAndRemove(id);
  }
}
