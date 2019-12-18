module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/standard",
    "@vue/typescript"
    // "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    "no-unused-vars": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    quotes: [
      "error",
      "double"
      // { avoidEscape: true },
      // { allowTemplateLiterals: true }
    ],
    skipBlankLines: 0,
    semi: [2, "always"],
    indent: ["error", 2],
    "space-before-function-paren": ["error", "never"]
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};
