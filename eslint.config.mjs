import eslint from '@eslint/js';
import tseslint from "typescript-eslint";

export default tseslint.config(
    {
      files: [
        'src/**/*.ts',
      ],
      extends: [
        eslint.configs.recommended,
        ...tseslint.configs.recommended,
      ],
      plugins: {
        '@typescript-eslint': tseslint.plugin,
      },
      languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
          project: true,
        },
      },
      rules: {
        "@typescript-eslint/explicit-member-accessibility": [
          "error",
          {
            "accessibility": "explicit",
            "overrides": {
              "constructors": "no-public"
            }
          }
        ]
      }
    }
);