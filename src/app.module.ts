import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FavouriteListModule } from './favourite-list/favourite-list.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    FavouriteListModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.CONNECTION_STRING),
    // MongooseModule.forRoot(config.mongoURI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
