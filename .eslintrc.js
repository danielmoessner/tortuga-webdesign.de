module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    // https://eslint.vuejs.org/rules/#priority-c-recommended-minimizing-arbitrary-choices-and-cognitive-overhead-for-vue-js-2-x
    "plugin:vue/recommended",
    // https://eslint.org/docs/rules/
    "eslint:recommended",
    // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    "plugin:prettier/recommended",
    // https://github.com/prettier/eslint-config-prettier#eslint-config-prettier
    "prettier",
    "prettier/vue",
  ],
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "vue/no-v-html": 0,
    "vue/no-static-inline-styles": 0,
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
  globals: {
    $nuxt: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
};
