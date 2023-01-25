module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    "plugin:import/typescript",
    'plugin:@typescript-eslint/recommended',
    "plugin:svelte/recommended",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte'],
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      rules: {
        "svelte/indent": "error",
        indent: "off",
        "svelte/max-attributes-per-line": [
          "error",
          {
            "multiline": 1,
            "singleline": 3
          }
        ],
        'max-len': "off",
      }
    }
  ],
  plugins: [
    '@typescript-eslint', 'import', 'eslint-plugin-import-helpers'
  ],
  ignorePatterns: ['svelte.config.js', '.eslintrc.cjs', 'vite.config.ts', 'tailwind.config.cjs', 'postcss.config.cjs'],
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/default': 'off',
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "ts": "never",
      }
    ],
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    "import/no-unresolved": "error",
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@/features/*/*'],
      },
    ],

    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-function': 'off',

    quotes: [2, 'single', { avoidEscape: true }],
    'max-len': ['error', { code: 160, comments: 160, ignoreStrings: true }],
    'no-var': 'error',
    semi: 'error',
    'no-multi-spaces': 'error',
    'space-in-parens': 'error',
    'no-multiple-empty-lines': 'error',
    'prefer-const': 'error',
    'no-use-before-define': 'error',
    'import/prefer-default-export': 'off',
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"]
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true,
        "project": "./tsconfig.json",
      }
    }
  }
};
