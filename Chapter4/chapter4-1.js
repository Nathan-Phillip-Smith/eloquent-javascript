const range = (start, end, step) => {
  const arr = [];
  if (step && step > 0) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else if (step && step < 0) {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
  }
  return arr;
};
const sum = (numbers) => {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
};

console.log(sum(range(10, 1, -2)));
console.log(sum(range(10, 25)));
console.log(sum(range(4, 13, 3)));
console.log(range(10, 1, -2));
console.log(range(10, 25));
console.log(range(4, 13, 3));
