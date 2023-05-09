const reverseArray = (array) => {
  let newArray = [];
  for (let i = array.length - 1; i > -1; i--) {
    newArray.push(array[i]);
  }
  return newArray;
};

const reverseArrayInPlace = (array) => {
  for (let i = 0; i < array.length; i++) {
    array.unshift(array[i]);
    array.splice(i + 1, 1);
  }
  return array;
};

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
console.log(reverseArray([1, 2, 3, 4, 5]));
