const arrayToList = (arr) => {
  let list;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = {
      value: arr[i],
      rest: list,
    };
  }
  return list;
};

console.log(arrayToList([1, 2, 3, 4, 5]));

const listToArray = (list, array) => {
  if (list.rest) {
    array.push(list.value);
    list = list.rest;
    listToArray(list, array);
  } else {
    array.push(list.value);
  }
  return array;
};
console.log(listToArray(arrayToList([1, 2, 3, 4, 5]), []));
