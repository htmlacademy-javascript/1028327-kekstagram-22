/**
 * @param {number} num1
 * @param {number} num2
 */
const getRandomInteger = (num1, num2) => {
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
