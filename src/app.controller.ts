import { Controller, Get } from '@nestjs/common';
@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return '<h1 style="font-family: Arial;font-size: 5rem;">Hello Word</h1><h2 style="font-family: Arial;font-size: 5rem;">By Novais</h2>';
  }
}
