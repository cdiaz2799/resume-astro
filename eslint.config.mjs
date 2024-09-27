import eslintPluginAstro, { rules } from "eslint-plugin-astro";
export default [
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["src/**/*.{js,jsx,tsx,mjs,astro}"],
    rules: {}
  },
];
