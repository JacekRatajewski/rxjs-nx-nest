import { Injectable } from '@nestjs/common';
import { Note } from '../../../libs';

@Injectable()
export class AppService {
  getNotes(): Note[] {
    return [{
      name: 'test',
      desc: 'test',
      date: new Date(Date.now())
    }] as Note[];
  }
  getHello(): string {
    return 'Hello World!';
  }
}
