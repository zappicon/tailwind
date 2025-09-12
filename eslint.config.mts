import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"

export default [
  {
    ignores: ["dist/**", "coverage/**", "node_modules/**", "core/**"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        tsconfigRootDir: new URL(".", import.meta.url).pathname,
      },
    },
  },
]
