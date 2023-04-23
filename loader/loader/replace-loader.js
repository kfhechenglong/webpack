/*
 * @Author: hechenglong kfhechenglong@126.com
 * @Date: 2023-04-23 17:36:59
 * @LastEditors: hechenglong kfhechenglong@126.com
 * @LastEditTime: 2023-04-23 17:58:28
 * @FilePath: \webpack\loader\loader\replace-loader.js
 * @Description: 同步1loader
 */
module.exports = function (source) {
  // 配置loader选项
  const options = this.getOptions()
  return source.replace(/World/g, options.text || 'Loader')
}