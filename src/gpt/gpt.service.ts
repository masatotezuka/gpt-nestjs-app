import { Injectable } from '@nestjs/common';

import { CreateChatCompletionRequest } from 'openai';
import { Configuration, OpenAIApi } from 'openai';
@Injectable()
export class GptService {
  private readonly openai: OpenAIApi;
  constructor() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    this.openai = new OpenAIApi(configuration);
  }
  async post(prompt: string) {
    const req: CreateChatCompletionRequest = {
      model: 'gpt-3.5-turbo-16k',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    };

    const { data } = await this.openai.createChatCompletion(req);
    return data.choices[0].message.content;
  }
}
