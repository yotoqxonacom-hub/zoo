import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public getHello(): string {
    return 'Hello World!';
  }

  public getDetails(): string {
    return 'These are the zoo details!';
  }
}
