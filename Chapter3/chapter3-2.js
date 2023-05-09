const isEven = (number) => {
  if (number === 1) return false;
  if (number === 2) return true;
  return isEven(number - 2);
};

console.log(isEven(10));
