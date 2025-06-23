module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: "all",
  bracketSpacing: true,
  singleAttributePerLine: false,
  arrowParens: "always",
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  endOfLine: "lf",
  jsxSingleQuote: false,
  bracketSameLine: false,
  overrides: [
    {
      files: "*.md",
      options: {
        proseWrap: "always",
        tabWidth: 2,
      },
    },
  ],
};
