import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { DataDto } from './dto/data.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('send-email')
  sendEmail(@Body() data: DataDto): void {
    this.appService.sendEmail(data);
  }
}
