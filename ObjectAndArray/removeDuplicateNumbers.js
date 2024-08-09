const removeDuplicateNumbers1 = (arr = []) => {
  const uniqueNumbersArray = [];

  arr.map((number) => {
    if (uniqueNumbersArray.includes(number)) return;
    uniqueNumbersArray.push(number);
  });

  return uniqueNumbersArray;
};

const removeDuplicateNumbers2 = (arr = []) => {
  return [...new Set(arr)];
};

const removeDuplicateNumbers3 = (arr = []) => {
  return arr.filter((number, index) => arr.indexOf(number) === index);
};
