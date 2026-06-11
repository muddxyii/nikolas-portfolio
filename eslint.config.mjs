import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores([
    ".astro/**",
    ".agents/**",
    ".next/**",
    "dist/**",
    "node_modules/**",
    "out/**",
    ".wrangler/**",
    ".playwright-cli/**",
    "pnpm-lock.yaml",
  ]),
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs["flat/recommended"],
  ...astro.configs["flat/jsx-a11y-recommended"],
  {
    files: ["**/*.{js,mjs,cjs,ts}", "**/*.astro/*.js", "**/*.astro/*.ts"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    rules: {
      "astro/jsx-a11y/anchor-ambiguous-text": "off",
    },
  },
]);
