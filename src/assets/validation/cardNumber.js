//* 判別長度
export function hasDigitsOf(amount) {
  return function (value) {
    return value.length === amount;
  };
}

export const hasDigitsOfSixteen = hasDigitsOf(16);

//* 信用卡卡號驗證
export function isValidatedCard(cardNumber) {
  const cardNumberList = [...String(cardNumber)];
  const sum = cardNumberList
    .map((digit) => Number(digit))
    .reduce((previousSum, currentNumber, index) => {
      const weighting = (index + 1) % 2 === 0 ? 1 : 2;
      let value = currentNumber * weighting;
      if (value >= 10) {
        value = parseInt(value / 10) + (value % 10);
      }
      return previousSum + value;
    }, 0);

  return sum % 10 === 0;
}

//* 判別信用卡公司
export function getCreditCardCompany(cardNumber) {
  const creditCardCompany = {
    VISA: /^4/,
    Mastercard: /^[5][1-5]/,
    JCB: /^([3][5][2-8][8-9])/,
    UnionPay: /^62/,
  };

  let getCompany = false;

  Object.entries(creditCardCompany).forEach(([company, regex]) => {
    if (regex.test(String(cardNumber)) === true) {
      getCompany = company;
    }
  });

  return getCompany;
}
