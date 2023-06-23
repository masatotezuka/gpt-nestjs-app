import { Controller, Get } from '@nestjs/common';

import { RecipeService } from './recipe.service';

@Controller('recipe')
export class RecipeController {
  constructor(
    readonly recipeService: RecipeService, // readonly gptService: GptService,
  ) {}

  @Get()
  async index() {
    const result = await this.recipeService.getRecipe();
    console.log(result);

    return result;
  }
}
