/*
 * 整数转字符串
 * 未考虑科学计数情况
 * 受浮点数精度影响，小数部分转换不准
 */
function numberToString(num, hex) {
  if (arguments.length < 2) {
    hex = 10;
  }
  let string = '';
  let flag = '';
  if (num < 0) {
    flag = '-';
    num = Math.abs(num);
  }
  let integerStr = '';
  let integer = Math.floor(num);
  let fractionStr = '';
  let fraction = num - integer;
  console.log('over:', fraction);

  while(integer > 0) {
    integerStr = String(integer % hex) + integerStr;
    integer = Math.floor(integer / hex);
  }
  while(fraction > 0) {
    fraction = fraction * hex;
    fractionStr += Math.floor(fraction);
    fraction = fraction - Math.floor(fraction);
  }

  if (integerStr.length) {
    string = flag + integerStr;
  }
  if (fractionStr.length) {
    string = string + '.' + fractionStr;
  }
  return string;
}