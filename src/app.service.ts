import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Whats going on?';
  }
  getBye(): string {
    return 'hello bye bye';
  }
}
