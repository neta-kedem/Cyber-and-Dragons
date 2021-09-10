module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    "react/jsx-curly-brace-presence": [2, { "props": "always", "children": "always" }],
    "no-use-before-define": [0],
    "@typescript-eslint/no-use-before-define": [1],
    "quotes": ["error", "double"],
    "quote-props": ["error", "consistent"],
    "import/extensions": [0],
    "import/no-unresolved": [0],
  },
  ignorePatterns: ["build/**"],
};
