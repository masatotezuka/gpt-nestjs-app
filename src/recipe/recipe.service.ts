import { Injectable } from '@nestjs/common';
import { recipes } from 'src/data/recpies';
import { GptService } from 'src/gpt/gpt.service';

@Injectable()
export class RecipeService {
  constructor(readonly gptService: GptService) {}
  showRecipeList() {
    return recipes.reduce(
      (acc, cal) => `${acc}${cal.name}（id:${cal.id}）\n`,
      '',
    );
  }
  async getRecipe() {
    return await this.gptService.post(this.getRecipePrompt());
  }
  getRecipePrompt() {
    return `
あなたは天才料理研究家です。
下記の情報をを参考に、私に最適な料理を3つ教えてください

# 材料
- 豚こま肉
- 玉ねぎ
- にんじん

# 所有時間
30分 

# 私が作成できる料理
${this.showRecipeList()}

# 制約条件
- レシピ名は「私が作成できる料理」から選んでください

# 出力結果
以下のスキーマでフォーマットされたマークダウンのコード・スニペットでなければならない：
\`\`\`
[
  {
   id: number,
   name: string 
  },
  {
   id: number, 
   name: string
  }
]
\`\`\`
    `;
  }
}
