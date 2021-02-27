/**
 * @param {number} num1
 * @param {number} num2
 */
const getRandomInteger = (num1, num2 = 0) => {
  if (num1 === num2) {
    return num1;
  }
  const min = (num1 > num2) ? num2 : num1;
  const max = (num1 > num2) ? num1 : num2;
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

/**
 * @param {string} str
 * @param {number} maxLength
 */
const checkStrLength = (str, maxLength) => {
  return (str.length <= maxLength) ? true : false;
};

/**
 * @param {number} minNum
 * @param {number} maxNum
 */
const getArrayDontRepeatNum = (minNum, maxNum) => {
  const length = maxNum - minNum + 1;
  const setNum = new Set;

  while (setNum.size < length) {
    setNum.add(getRandomInteger(minNum, maxNum));
  }

  return [...setNum];
};

/**
 * @param {Array} arr
 */
const makeRandomArr = (arr) => [...arr].sort(() => Math.random() - 0.5);

/**
 * @param {number} max
 */
const createArrNaturalNum = (max) => [...(Array(max).keys())].map(item => item + 1);
