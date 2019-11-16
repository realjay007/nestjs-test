import { Injectable } from '@nestjs/common';

const appStart = Math.round(Date.now()/1000);

@Injectable()
export class AppService {
  getHello(): any {
    return {
      status: 200,
      success: true,
      message: "Hello world",
      data: { app_start: appStart }
    };
  }
}
