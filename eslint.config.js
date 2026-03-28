import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import reactX from "eslint-plugin-react-x";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";

const overrides = {
  "unicorn/filename-case": "off",
  "unicorn/no-null": "off",
  "unicorn/prefer-optional-catch-binding": "off",
  "unicorn/prevent-abbreviations": "off",
  "unicorn/text-encoding-identifier-case": "off",
  "prefer-template": "error",
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      args: "all",
      argsIgnorePattern: "^_",
      caughtErrors: "all",
      caughtErrorsIgnorePattern: "^_",
      ignoreRestSiblings: false,
      vars: "all",
      varsIgnorePattern: "^_",
    },
  ],
};

export default tseslint.config(
  { ignores: ["dist", "postcss.config.cjs"] },
  {
    languageOptions: {
      ecmaVersion: 2023,
      globals: globals.browser,
    },
    settings: { react: { version: "detect" } },
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  reactX.configs.recommended,
  eslintPluginUnicorn.configs.recommended,
  prettierConfig,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  {
    rules: overrides,
  },
);
