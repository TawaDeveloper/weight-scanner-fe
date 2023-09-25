export default {
  // 中文字符
  Chinese: /[\u4e00-\u9fa5]/,
  // 统一资源标识符
  URI: /[a-zA-z]+:\/\/[^\s]*/,
  // 空格
  WHITESPACE: /\s+/g,
  // 统一资源定位符
  URL: /^https?:\/\/[^\s]*$/,
  // 整数
  Integer: /^-?[1-9]\d*$/,
  // 正整数
  PositiveInteger: /^[1-9]\d*$/,
  // 负整数
  NegtiveInteger: /^-[1-9]\d*$/,
  // 非正整数
  NonPositiveInteger: /^-[1-9]\d*|0$/,
  // 非负整数
  NonNegtiveInteger: /(^[1-9]+\d*$)|(^0$)/,
  // 图片
  Image: /.(jpe?g|png)$/i,
  // 字符数字下划线
  Code: /^[a-zA-Z0-9_]\w*$/,
  // 英文
  English: /^[\u4e00-\u9fa5_a-zA-Z]+$/,
};
