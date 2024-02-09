import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { DataDto } from './dto/data.dto';

@Injectable()
export class AppService {
  constructor(private mailerService: MailerService) {}

  async sendEmail(data: DataDto): Promise<void> {
    try {
      await this.mailerService.sendMail({
        to: data.email,
        subject: 'Email de prueba',
        template: 'mail',
        context: {
          username: data.username,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
