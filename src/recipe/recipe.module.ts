import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { GptService } from 'src/gpt/gpt.service';

@Module({
  providers: [RecipeService, GptService],
  controllers: [RecipeController],
})
export class RecipeModule {}
