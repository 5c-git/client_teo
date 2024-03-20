/* eslint-disable */
import utils from "./utils.scss";
import main from "./main.scss";
import fonts from "./fonts.scss";
/* eslint-enable */

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
    [array[i], array[j]] = [array[j], array[i]];
  }
};
// Функция чтобы ставить пробелы каждые 3 символа.
const numberSplitter = (num) => {
  const n = num.toString();
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ');
};

export {
  shuffle,
  numberSplitter,
};
