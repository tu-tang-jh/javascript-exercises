const findKeysByValue = (map, value) => {
  const keys = [];
  map.forEach((val, key) => {
    if (val === value) {
      keys.push(key);
    }
  });

  return keys;
};

const findTheMostRepetitions = (arr = []) => {
  const frequencyOfNumbers = new Map();

  arr.forEach((number) => {
    if (!frequencyOfNumbers.has(number)) {
      frequencyOfNumbers.set(number, 1);
      return;
    }

    const currentValue = frequencyOfNumbers.get(number);
    frequencyOfNumbers.set(number, currentValue + 1);
  });

  const maxFrequencyValue = Math.max(...frequencyOfNumbers.values());

  return findKeysByValue(frequencyOfNumbers, maxFrequencyValue);
};
