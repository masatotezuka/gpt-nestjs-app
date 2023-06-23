## Description

GhatGPT API を使用してレシピを提案するアプリ

## Installation

```bash
$ pnpm install
```

## Setup

.env ファイルを作成して、OpenAI API キーを設定

```
OPENAI_API_KEY=[APIキー]
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev
```

http://localhost:3000/recipe にアクセスすると、JSON データがレスポンスされる

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```
