function isNoEarlierThanThisYear(value) {
  return value >= new Date().getFullYear() === true;
}

export { isNoEarlierThanThisYear };
