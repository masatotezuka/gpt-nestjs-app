import { Module } from '@nestjs/common';
import { GptModule } from './gpt/gpt.module';
import { RecipeService } from './recipe/recipe.service';
import { RecipeModule } from './recipe/recipe.module';
import { ConfigModule } from '@nestjs/config';
import { GptService } from './gpt/gpt.service';

@Module({
  imports: [GptModule, RecipeModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [],
  providers: [RecipeService, GptService],
})
export class AppModule {}
