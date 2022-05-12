function is3To4Numbers(value) {
  return (0.1 <= value / 1000 && value / 1000 < 10) === true;
}

export { is3To4Numbers };
