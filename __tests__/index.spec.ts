/*
 * @Author: wudongdong0921 1159543738@qq.com
 * @Date: 2023-08-07 15:23:44
 * @LastEditors: wudongdong0921 1159543738@qq.com
 * @LastEditTime: 2023-08-07 15:32:17
 * @FilePath: \textAutomate\__tests__\index.spec.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import calc from '../src'

test('The calculation result should be 996.', () => {
  expect(calc(1024, 28)).toBe(996)
})