/** @type {import("prettier").Config} */
module.exports = {
  semi: true,
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'avoid',
  endOfLine: 'auto',
  plugins: ['prettier-plugin-tailwindcss'], // auto-sorts Tailwind classes
};
