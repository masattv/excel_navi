# コンポーネント設計書

## レイアウトコンポーネント

### Layout
アプリケーション全体のレイアウトを管理するコンポーネント

**Props**
```typescript
interface LayoutProps {
  children: React.ReactNode;
}
```

### Header
ヘッダーナビゲーションを表示するコンポーネント

**Props**
```typescript
interface HeaderProps {
  user?: {
    name: string;
    email: string;
  };
}
```

### Footer
フッター情報を表示するコンポーネント

## 認証コンポーネント

### LoginForm
ログインフォームを表示するコンポーネント

**Props**
```typescript
interface LoginFormProps {
  onSuccess: (user: User) => void;
  onError: (error: Error) => void;
}
```

### RegisterForm
新規登録フォームを表示するコンポーネント

**Props**
```typescript
interface RegisterFormProps {
  onSuccess: (user: User) => void;
  onError: (error: Error) => void;
}
```

## 数式生成コンポーネント

### PromptInputForm
プロンプト入力フォームを表示するコンポーネント

**Props**
```typescript
interface PromptInputFormProps {
  onSubmit: (prompt: string, options: GenerateOptions) => void;
  isLoading: boolean;
  templates?: Template[];
}
```

### FormulaResult
生成された数式と解説を表示するコンポーネント

**Props**
```typescript
interface FormulaResultProps {
  formula: string;
  explanation?: string;
  example?: string;
  onCopy: () => void;
  onDownload: () => void;
}
```

### ScriptResult
生成されたスクリプトを表示するコンポーネント

**Props**
```typescript
interface ScriptResultProps {
  script: string;
  comments?: string;
  example?: string;
  type: 'vba' | 'gas';
  onCopy: () => void;
  onDownload: () => void;
}
```

## テンプレートコンポーネント

### TemplateList
テンプレート一覧を表示するコンポーネント

**Props**
```typescript
interface TemplateListProps {
  templates: Template[];
  onSelect: (template: Template) => void;
  onFavorite: (templateId: string) => void;
}
```

### TemplateCard
個別のテンプレートカードを表示するコンポーネント

**Props**
```typescript
interface TemplateCardProps {
  template: Template;
  isFavorite: boolean;
  onSelect: () => void;
  onFavorite: () => void;
}
```

## 履歴コンポーネント

### HistoryList
履歴一覧を表示するコンポーネント

**Props**
```typescript
interface HistoryListProps {
  history: History[];
  onSelect: (history: History) => void;
  onDelete: (historyId: string) => void;
}
```

### HistoryItem
個別の履歴アイテムを表示するコンポーネント

**Props**
```typescript
interface HistoryItemProps {
  history: History;
  onSelect: () => void;
  onDelete: () => void;
}
```

## 共通コンポーネント

### Button
共通のボタンコンポーネント

**Props**
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}
```

### Input
共通の入力フィールドコンポーネント

**Props**
```typescript
interface InputProps {
  type: 'text' | 'email' | 'password';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
}
```

### Select
共通のセレクトボックスコンポーネント

**Props**
```typescript
interface SelectProps {
  options: Array<{
    value: string;
    label: string;
  }>;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}
```

### LoadingSpinner
ローディングスピナーコンポーネント

**Props**
```typescript
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
}
```

### ErrorMessage
エラーメッセージを表示するコンポーネント

**Props**
```typescript
interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}
``` 