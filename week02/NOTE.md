# 第二周总结

## 作业
1. 写一个正则表达式 匹配所有 Number 直接量
```javascript
const reg = /^((((0)|([1-9]\d*))?.?(\d*)((e|E)?(\+|\-)?(\d*))?)|(0(b|B)(0|1)+)|(0(O|o)[0-7]+)|(0(x|X)([0-9a-fA-F])+))$/
```

2. 写一个 UTF-8 Encoding 的函数
```javascript
function encodeUTF8(str) {
  let bi = 0;
  const bytes = new Uint8Array(str.length * 4);
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode < 128) {
      bytes[bi++] = charCode;
    } else {
      if (charCode < 2048) {
        bytes[bi++] = charCode >> 6 | 192;
      } else {
        if (charCode > 0xd7ff && charCode < 0xdc00) {
          if (++i >= str.length)
            throw new Error('UTF-8 encode: incomplete surrogate pair');
          const temp = s.charCodeAt(i);
          if (temp < 0xdc00 || temp > 0xdfff)
            throw new Error('UTF-8 encode: second surrogate character 0x' + temp.toString(16) + ' at index ' + i + ' out of range');
          charCode = 0x10000 + ((charCode & 0x03ff) << 10) + (temp & 0x03ff);
          bytes[bi++] = charCode >> 18 | 240;
          bytes[bi++] = charCode >> 12 & 63 | 128;
        } else {
          bytes[bi++] = charCode >> 12 | 224;
        }
        bytes[bi++] = charCode >> 6 & 63 | 128;
      }
      bytes[bi++] = charCode & 63 | 128;
    }
  }
  return bytes.subarray(0, bi);
}
```

3. 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号
```javascript
const reg = /^['"\\bfnrtv/dxu]$|^u[0-9a-fA-F]{4}$|^u(10|0?[0-9a-fA-F])[0-9a-fA-F]{0,4}$/
```

## 本周总结
- 通过学习编程语言通识，了解了语言按语法的分类、产生式、图灵完备性、动态与静态和类型系统，后续需补充产生式相关知识。
- 周末由于身体不舒服，本周工作较忙，周六的课程暂未学习，作业是根据 google 相关资料完成的，后续学习完相关课程再完善总结。