'use strict';
/* eslint-disable no-unused-vars */

const MESSAGE_TEXTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Суанда',
  'Мзауч',
  'Хамид',
  'Туказбан',
  'Герда',
  'Лаймон',
  'Аполлон',
  'Гавриила',
  'Ефим',
  'Лена',
];

const MAX_NUMBER_COMMENTS = 6;

const MAX_NUMBER_PHOTOS = 25;


/**
 * @param {number} num1
 * @param {number} num2
 * @return {number} Случайное целове число
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
 * @return {Boolean} Проверяет длину строки
 */
const checkStrLength = (str, maxLength) => {
  return (str.length <= maxLength) ? true : false;
};


/**
 * @param {number} minNum
 * @param {number} maxNum
 * @return {Array} Создает массив неповторяющихся целых чисел
 */
const createArrayDontRepeatNum = (maxNum, minNum = 1) => {
  const length = maxNum - minNum + 1;
  const setNum = new Set;

  while (setNum.size < length) {
    setNum.add(getRandomInteger(minNum, maxNum));
  }

  return [...setNum];
};


/**
 * @param {Array} arr
 * @return {Array} Создает массив перемешеннаных значений
 */
const makeRandomArr = (arr) => [...arr].sort(() => Math.random() - 0.5);


/**
 * @param {number} max
 * @return {Array} Создает массив последовательностью чисел
 */
const createArrSequenceNum = (max) => [...(new Array(max).keys())].map(item => item + 1);


/**
 * @param {number} id
 * @return {Object} Создает объект — комментарий
 */
const createComment = (id) => {
  return {
    id,
    avatar: `img/avatar-${id}.svg`,
    message: MESSAGE_TEXTS[getRandomInteger(MESSAGE_TEXTS.length - 1)],
    name: NAMES[getRandomInteger(NAMES.length - 1)],
  }
};


/**
 * @param {number} id
 * @return {Object} Создает объект — фотография
 */
const createPhoto = (id) => {
  const numberComments = getRandomInteger(MAX_NUMBER_COMMENTS);
  const comments = createArrayDontRepeatNum(numberComments).map(num => createComment(num));

  return {
    id,
    url: `photos/${id}.jpg`,
    description: 'Потрясающее фото',
    likes: getRandomInteger(15, 200),
    comments,
  }
}

const photos = createArrayDontRepeatNum(MAX_NUMBER_PHOTOS).map(num => createPhoto(num));
