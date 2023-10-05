import config from '@windyroad/xo-config'
/**
 * @typedef {import('eslint').Linter.Config & { prettier?: boolean, extensions?: string[] }} ESLintConfig
 */

/**
 * @type {ESLintConfig}
 */
const config = {
  extends: [config, "plugin:json/recommended"],
  plugins: ['turbo']
};


module.exports = config;