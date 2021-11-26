import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Note } from '../../../libs';
import { Observable, of } from 'rxjs';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): Observable<string> {
    return of(this.appService.getHello());
  }

  @Get('notes')
  getNotes(): Observable<Note[]> {
    return of(this.appService.getNotes());
  }
}
