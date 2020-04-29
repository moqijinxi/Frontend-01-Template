/*
 * 字符串转整数
 * 默认输入合法，不包含中文字符
 * 未考虑科学计数情况
 */
function stringToNumber(str, hex) {
  if (!str) return;
  if (arguments.length < 2) {
    hex = 10;
  }
  let flag = 1;
  if (str[0].codePointAt(0) === 45) { // 判断是否为负数
    str = str.slice(1);
    flag = -1;
  }

  const numArr = str.split('.');
  const integerArr = numArr[0].split(''); // 整数部分字符数组
  let integer = 0; // 整数
  const fractionArr = (numArr[1] || '').split(''); // 小数部分字符数组
  let fraction = 0; // 小数

  for(let n = 0; n < integerArr.length; n++) { // 整数部分处理
    integer = integer * hex;
    integer += getNumber(integerArr[n]);
  }
  
  if (fractionArr.length) { // 小数部分处理
    // 由于浮点数加法运算可能出问题，故先将小数转为整数，再除以一个大数
    fraction = 1;
    let tempFraction = 0;
    for(let f = 0; f < fractionArr.length; f++) {
      tempFraction = tempFraction * hex;
      fraction = fraction * hex;
      tempFraction += getNumber(fractionArr[f]);
    }
    fraction = tempFraction / fraction;
  }

  return (integer + fraction) * flag;
}

/*
 * 字符转数字
 */
function getNumber (char) {
  return char.codePointAt(0) - '0'.codePointAt(0);
}

// 控制台输出测试
stringToNumber('10'); // 10
stringToNumber('10.0012'); // 10.0012
stringToNumber('-10'); // -10
stringToNumber('-10.0012'); // -10.0012