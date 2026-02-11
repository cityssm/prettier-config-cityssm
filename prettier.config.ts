import type { Config } from 'prettier'

export const prettierConfig: Config = {
  bracketSpacing: true,
  endOfLine: 'lf',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none'
}

export const prettierSqlConfig: Config = {
  ...prettierConfig,

  plugins: ['prettier-plugin-embed', 'prettier-plugin-sql'],

  /* Disable HTML embedding for now, breaks formatting with template literals */
  embeddedHtmlComments: [],
  embeddedHtmlTags: [],

  dataTypeCase: 'upper',
  keywordCase: 'upper'
}

export const prettierSqliteConfig: Config = {
  ...prettierSqlConfig,
  language: 'sqlite'
}

export const prettierSqlServerConfig: Config = {
  ...prettierSqlConfig,
  language: 'tsql'
}

export default prettierConfig
