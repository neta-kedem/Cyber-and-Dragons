module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "no-use-before-define": [0],
    "@typescript-eslint/no-use-before-define": [1],
    "quotes": ["error", "double"],
    "quote-props": ["error", "consistent"],
    "import/extensions": [0],
    "import/no-unresolved": [0],
  },
  ignorePatterns: ["dist/**"],
};
