import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GeminiModule } from './gemini/gemini.module';
@Module({
  imports: [GeminiModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
