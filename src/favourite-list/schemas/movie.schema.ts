import * as mongoose from 'mongoose';

export const movieSchema = new mongoose.Schema({
  name: String,
  posterUrl: String,
  releaseDate: String,
  overview: String,
  userEamil: String,
  userName: String,
});
