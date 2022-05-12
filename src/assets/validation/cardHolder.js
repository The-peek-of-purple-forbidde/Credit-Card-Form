//* isRequired 不得輸入空值
export function isRequired(value) {
  console.log(typeof value);
  return value.trim().length !== 0;
}

//* 判別是否為英文名字 1.需為英文名字 2.開頭結尾不得為空白 3.中間可有空白
export function isFormattedEnglishName(value) {
  return /^[a-zA-Z][a-zA-Z ]*[a-zA-Z]+$/.test(value) === true;
}
