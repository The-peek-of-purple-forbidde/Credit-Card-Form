//* isRequired 不得輸入空值
export function isRequired(value) {
  // console.log(typeof value);
  return value.trim().length !== 0;
}

//* 判別型別 > 全數字
export function hasOnlyNumber(value) {
  return /\d+/.test(value) === true;
}
