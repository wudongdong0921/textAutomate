/*
 * @Author: web东东 wudongdong@wintopgis.com
 * @Date: 2023-08-03 10:47:13
 * @LastEditors: web东东 wudongdong@wintopgis.com
 * @LastEditTime: 2023-08-07 13:15:40
 * @FilePath: \textAutomate\.eslintrc.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
     extends: ['standard', 'eslint-config-standard-with-typescript'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      project: './tsconfig.json'
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {}
  }