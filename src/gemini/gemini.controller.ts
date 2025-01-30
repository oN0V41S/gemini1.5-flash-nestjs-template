import { Controller, Post, Body, Headers} from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { GeminiChatDto } from './dto/gemini-chat.dto';
@Controller('gemini')
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) {}

  @Post()
  sendMessage(
    @Headers('api_key') userApiKey: string,
    @Body() geminiChatDto: GeminiChatDto,
    ) {
    return this.geminiService.sendMessage(geminiChatDto,userApiKey);
  }
}
