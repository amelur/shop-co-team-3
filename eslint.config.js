import { Linter } from 'eslint';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

/** @type {Linter.Config[]} */
const config = [
  {
    files: ['src/**/*.{js,ts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      'prefer-const': 'warn',
    },
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      semi: 'warn', // Требование точек с запятой
      'no-var': 'warn', // Запрет на использование var
      'prefer-const': 'warn', // Предпочтение const
      '@typescript-eslint/explicit-function-return-type': 'warn', // Требование явно указывать возвращаемый тип
      '@typescript-eslint/no-unused-vars': 'warn', // Запрет на неиспользуемые переменные
      'no-console': 'warn', // Запрет на console.log
      '@typescript-eslint/explicit-function-return-type': 'warn', // Требует явного указания типов
      '@typescript-eslint/no-unused-vars': 'warn', // Запрещает неиспользуемые переменные
      '@typescript-eslint/no-use-before-define': 'warn', // Переменные нельзя использовать до их объявления
    },
  },
];

export default config;
