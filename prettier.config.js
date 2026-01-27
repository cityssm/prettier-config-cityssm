export const prettierConfig = {
    bracketSpacing: true,
    semi: false,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'none'
};
export const prettierSqlConfig = {
    ...prettierConfig,
    plugins: ['prettier-plugin-embed', 'prettier-plugin-sql'],
    dataTypeCase: 'upper',
    keywordCase: 'upper'
};
export const prettierSqliteConfig = {
    ...prettierSqlConfig,
    language: 'sqlite'
};
export const prettierSqlServerConfig = {
    ...prettierSqlConfig,
    language: 'tsql'
};
export default prettierConfig;
