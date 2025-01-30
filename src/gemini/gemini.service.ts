import { Injectable } from '@nestjs/common';
import { GeminiChatDto } from './dto/gemini-chat.dto';
import {
  ChatSession,
  GenerativeModel,
  GoogleGenerativeAI
} from '@google/generative-ai';

@Injectable()
export class GeminiService {
  async sendMessage(geminiChatDTO: GeminiChatDto, userApiKey: string) {
    const genAI = new GoogleGenerativeAI(userApiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(geminiChatDTO.message);
    const geminiResponse = result.response.candidates[0].content.parts[0].text
    return geminiResponse;
  }
}
