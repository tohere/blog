/**
 * @Author: tomorrow-here
 * @Date: 2019-01-20 20:17:41
 * @Desc: 格式化时间
 * @param {String} str 时间字符串
 */
export function formatTime (str) {
  str = new Date(str)
  let year = str.getFullYear()
  let month = add0(str.getMonth() + 1)
  let day = add0(str.getDate())
  let h = add0(str.getHours())
  let m = add0(str.getMinutes())
  let s = add0(str.getSeconds())
  return year + '-' + month + '-' + day + ' ' + h + ':' + m + ':' + s
}

/**
 * @Author: tomorrow-here
 * @Date: 2019-01-20 20:31:36
 * @Desc: 补0
 * @param {Number} num 要补0的数字获取数字字符串
 */
function add0 (num) {
  return num > 10 ? num : '0' + num
}
