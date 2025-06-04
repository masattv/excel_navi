# API設計書

## 認証関連API

### POST /api/auth/register
新規ユーザー登録

**リクエスト**
```json
{
  "email": "string",
  "password": "string",
  "name": "string"
}
```

**レスポンス**
```json
{
  "user": {
    "id": "string",
    "email": "string",
    "name": "string"
  }
}
```

### POST /api/auth/login
ユーザーログイン

**リクエスト**
```json
{
  "email": "string",
  "password": "string"
}
```

**レスポンス**
```json
{
  "token": "string",
  "user": {
    "id": "string",
    "email": "string",
    "name": "string"
  }
}
```

## 数式生成API

### POST /api/generate/formula
数式生成

**リクエスト**
```json
{
  "prompt": "string",
  "templateId": "string?",
  "options": {
    "includeExplanation": "boolean",
    "includeExample": "boolean"
  }
}
```

**レスポンス**
```json
{
  "formula": "string",
  "explanation": "string?",
  "example": "string?"
}
```

### POST /api/generate/script
スクリプト生成（VBA/Google Apps Script）

**リクエスト**
```json
{
  "prompt": "string",
  "type": "vba" | "gas",
  "options": {
    "includeComments": "boolean",
    "includeExample": "boolean"
  }
}
```

**レスポンス**
```json
{
  "script": "string",
  "comments": "string?",
  "example": "string?"
}
```

## テンプレートAPI

### GET /api/templates
テンプレート一覧取得

**クエリパラメータ**
- category: string?
- search: string?
- page: number
- limit: number

**レスポンス**
```json
{
  "templates": [
    {
      "id": "string",
      "name": "string",
      "category": "string",
      "description": "string"
    }
  ],
  "total": "number",
  "page": "number",
  "limit": "number"
}
```

### GET /api/templates/:id
テンプレート詳細取得

**レスポンス**
```json
{
  "id": "string",
  "name": "string",
  "category": "string",
  "description": "string",
  "promptBase": "string"
}
```

## 履歴API

### GET /api/history
履歴一覧取得

**クエリパラメータ**
- page: number
- limit: number

**レスポンス**
```json
{
  "history": [
    {
      "id": "string",
      "promptText": "string",
      "resultText": "string",
      "createdAt": "string",
      "template": {
        "id": "string",
        "name": "string"
      }
    }
  ],
  "total": "number",
  "page": "number",
  "limit": "number"
}
```

### POST /api/history
履歴保存

**リクエスト**
```json
{
  "promptText": "string",
  "resultText": "string",
  "templateId": "string?"
}
```

**レスポンス**
```json
{
  "id": "string",
  "createdAt": "string"
}
```

## お気に入りAPI

### GET /api/favorites
お気に入り一覧取得

**レスポンス**
```json
{
  "favorites": [
    {
      "id": "string",
      "template": {
        "id": "string",
        "name": "string",
        "category": "string",
        "description": "string"
      },
      "createdAt": "string"
    }
  ]
}
```

### POST /api/favorites
お気に入り追加

**リクエスト**
```json
{
  "templateId": "string"
}
```

**レスポンス**
```json
{
  "id": "string",
  "createdAt": "string"
}
```

### DELETE /api/favorites/:id
お気に入り削除

**レスポンス**
```json
{
  "success": "boolean"
}
``` 