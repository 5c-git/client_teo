/* eslint-disable */
import utils from "./utils.scss";
import main from "./main.scss";
import fonts from "./fonts.scss";
/* eslint-enable */

// const phoneRegExp = /^((8|\+7)[ \- ]?)?(\(?\d{3}\)?[ \- ]?)?[\d\- ]{7,10}$/;
const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/;

export const formatDate = (value) => {
  const pattern = /(\d{1,2})\.(\d{1,2})\.(\d{1,4})/;
  return value.replace(pattern, "$2/$1/$3");
};

// Находим ширину скролбара и узнаем на сколько добавлять отступ справа у body.
const body = document.querySelector("body");
const header = document.querySelector(".header__fixed");
const dropdown = document.querySelector(".header__dropdown");
const getScrollbarWidth = () =>
  window.innerWidth - document.documentElement.clientWidth;
let checker = false;

// Функция чтобы блочить экран и давать отступ.
const getPaddingOnBody = () => {
  const modal = document.querySelector(".Modal");
  document.addEventListener("resize", () => {
    getScrollbarWidth();
  });
  if (!checker) {
    body.style.paddingRight = `${getScrollbarWidth()}px`;
    if (header) {
      header.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (dropdown) {
      dropdown.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (modal) {
      modal.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    body.classList.add("static");
    checker = true;
  }
};

// Функция чтобы снимать блокировку экрана и убирать отступ.
const getPaddingFromBody = () => {
  const modal = document.querySelector(".Modal");
  if (checker) {
    body.style.paddingRight = "";
    body.style.paddingRight = `${getScrollbarWidth()}px`;
    if (header) {
      header.style.paddingRight = "";
    }
    if (dropdown) {
      dropdown.style.paddingRight = "";
    }
    if (modal) {
      modal.style.paddingRight = "";
    }
    body.classList.remove("static");
    checker = false;
  }
};

// Функция чтобы навешивать вызов модального окна заявки по кнопке.
const activateRequestButtons = () => {
  const buttons = document.querySelectorAll(
    ".button-request:not(.button-request--js)"
  );

  buttons.forEach((button) => {
    if (!button.classList.contains("button-request--js")) {
      button.classList.add("button-request--js");
      const { type } = button.dataset;
      const { id } = button.dataset;

      button.addEventListener("click", () => {
        window.RequestModalProvider.setType(type);
        window.RequestModalProvider.setId(id);
        window.RequestModalProvider.setShow(true);
      });
    }
  });
};

// Функция чтобы навешивать вызов модального окна рейтинга по кнопке.
const activateRatingButtons = () => {
  const buttons = document.querySelectorAll(
    ".button-rating:not(.button-rating--js)"
  );

  buttons.forEach((button) => {
    if (!button.classList.contains("button-rating--js")) {
      button.classList.add("button-rating--js");
      const { type } = button.dataset;
      const { id } = button.dataset;

      button.addEventListener("click", () => {
        window.RatingModalProvider.setType(type);
        window.RatingModalProvider.setId(id);
        window.RatingModalProvider.setShow(true);
      });
    }
  });
};

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const isObject = (object) => {
  const type = typeof object;
  return type === "function" || type === "object";
};

const createFormData = (values) => {
  const data = new FormData();

  // eslint-disable-next-line no-restricted-syntax
  for (const key in values) {
    if (isObject(values[key])) {
      values[key].forEach((file, index) => {
        data.append(`${key}-${index}`, file);
      });
    } else {
      data.append(key, values[key]);
    }
  }
  return data;
};

export {
  getPaddingOnBody,
  getPaddingFromBody,
  getScrollbarWidth,
  phoneRegExp,
  activateRequestButtons,
  activateRatingButtons,
  shuffle,
  createFormData,
};
