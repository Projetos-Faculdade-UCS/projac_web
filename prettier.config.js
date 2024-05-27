/** @type {import("prettier").Config} */
const config = {
    trailingComma: "all",
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    printWidth: 80,
    plugins: ['prettier-plugin-tailwindcss'],
    singleQuote: true,
  };
  
  module.exports = config;