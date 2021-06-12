module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: ["plugin:vue/recommended", "eslint:recommended", "prettier"],
  plugins: ["vue", "prettier"],
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "vue/no-v-html": 0,
    "vue/no-static-inline-styles": 0,
    "vue/no-unused-components": "warn",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
        singleQuote: false,
        semi: true,
      },
    ],
  },
  globals: {
    $nuxt: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
};
