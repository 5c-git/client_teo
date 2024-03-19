import './trade-card.scss';
import Choices from 'choices.js';
import flatpickr from 'flatpickr';
import {
  Russian,
} from 'flatpickr/dist/l10n/ru';

const initSelect = () => {
  const selects = document.querySelectorAll('.trade-card__select:not(.trade-card__select--js)');
  if (selects.length > 0) {
    selects.forEach((select) => {
      if (!select.classList.contains('trade-card__select--js')) {
        select.classList.add('trade-card__select--js');
        const choicesNolint = new Choices(select, {
          searchEnabled: false,
          itemSelectText: '',
          shouldSort: false,
          loadingText: 'Думаем...',
          noResultsText: 'Ничего не найдено',
          noChoicesText: 'Ничего не выбрано',
          classNames: {
            containerOuter: 'choices trade-card__choices',
          },
        });

        select.addEventListener('showDropdown', () => {
        });

        select.addEventListener('hideDropdown', () => {
        });
      }
    });
  }
};

const initDeliveryDate = () => {
  const deliveryDates = document.querySelectorAll('.trade-card__date:not(.trade-card__date--js)');
  if (deliveryDates.length > 0) {
    deliveryDates.forEach((deliveryDate) => {
      if (!deliveryDate.classList.contains('trade-card__date--js')) {
        deliveryDate.classList.add('trade-card__date--js');

        flatpickr(deliveryDate, {
          locale: Russian,
          minDate: 'today',
          disableMobile: true,
          allowInput: true,
          format: 'd.m.Y',
          altFormat: 'd.m.Y',
          altInput: true,
        });
      }
    });
  }
};

initDeliveryDate();

export {
  initSelect,
  initDeliveryDate,
};
