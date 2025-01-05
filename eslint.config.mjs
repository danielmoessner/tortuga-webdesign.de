import prettier from "eslint-plugin-prettier";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  plugins: {
    prettier,
  },
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "vue/no-v-html": 0,
    "vue/no-static-inline-styles": 0,
    "vue/no-unused-components": "warn",
    "no-console": "off",
    "no-debugger": "off",
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
        singleQuote: false,
        semi: true,
      },
    ],
  },
});
