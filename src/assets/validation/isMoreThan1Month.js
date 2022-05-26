function isMoreThan1Month(month, year) {
  if (year === new Date().getFullYear()) {
    return month >= new Date().getMonth() + 1 === true;
  }
}

export { isMoreThan1Month };
