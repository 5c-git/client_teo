// Куки уже вшиты в bundle.js

// Функция чтобы округлять до сотых.
const rounded = (number) => {
  const multiple = Math.pow(10, 2);
  return Math.round(+number * multiple) / multiple;
}

// Функция чтобы ставить пробелы каждые 3 символа.
const numberSplitter = (num) => {
  const n = num.toString();
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ');
};

const updateFormValue = () => {
  const trade = document.querySelector('.trade');
  if (trade) {
    console.log('updateFormValue');

    const EXCHANGE = {
      RUB: 1.00,
    };
    const UF_PURCHASE_PRICE_SUM = {
      VALUE: 0,
      CURRENCY: 'EUR',
      RUB: 0,
    };
    const UF_PURCHASE_TRANSPORT_SUM = {
      VALUE: 0,
      CURRENCY: 'EUR',
      RUB: 0,
    };
    const UF_PURCHASE_DUTY_SUM = {
      VALUE: 0,
      CURRENCY: 'EUR',
      RUB: 0,
    };
    const UF_PURCHASE_INSURANCE_SUM = {
      VALUE: 0,
      CURRENCY: 'EUR',
      RUB: 0,
    };
    const UF_COST_PER_UNIT_SUM = {
      VALUE: 0,
      CURRENCY: 'EUR',
      RUB: 0,
    };
    const UF_PRODUCT_PRICE_NO_NDS_SUM = {
      VALUE: 0,
      CURRENCY: 'EUR',
      RUB: 0,
    };

    const exchangeRate = trade.querySelector('.exchange-rate');
    if (exchangeRate) {
      const fields = exchangeRate.querySelectorAll('.exchange-rate__field');

      fields.forEach((field) => {
        const key = field.querySelector('input').dataset.name;
        const value = field.querySelector('input').value;
        EXCHANGE[key] = rounded(value);
      });
    }

    const exchange = (number, rate) => {
      return rounded(+number / EXCHANGE[rate]);
    };


    const UF_PAY_TYPE = trade.querySelector('[data-name="UF_PAY_TYPE"]').querySelector('select').value;
    const UF_REALIZ_PLACE = trade.querySelector('[data-name="UF_REALIZ_PLACE"]').querySelector('select').value;

    const items = trade.querySelectorAll('.trade-card');
    items.forEach((item) => {
      const fields = item.querySelectorAll('.trade-card__field');

      const UF_PRICE = {};
      UF_PRICE.VALUE = Number(item.querySelector('[data-name="UF_PRICE"]').querySelector('input').value);
      UF_PRICE.CURRENCY = item.querySelector('[data-name="UF_PRICE"]').querySelector('select').value;
      UF_PRICE.RUB = UF_PRICE.VALUE * EXCHANGE[UF_PRICE.CURRENCY];

      const UF_QUANTITY = Number(item.querySelector('[data-name="UF_QUANTITY"]').querySelector('input').value);

      const UF_PURCHASE_PRICE = {};

      const UF_PURCHASE_TRANSPORT_RUB = {};
      UF_PURCHASE_TRANSPORT_RUB.VALUE = Number(item.querySelector('[data-name="UF_PURCHASE_TRANSPORT_RUB"]').querySelector('input').value);
      UF_PURCHASE_TRANSPORT_RUB.CURRENCY = item.querySelector('[data-name="UF_PURCHASE_TRANSPORT_RUB"]').querySelector('select').value;
      UF_PURCHASE_TRANSPORT_RUB.RUB = UF_PURCHASE_TRANSPORT_RUB.VALUE * EXCHANGE[UF_PURCHASE_TRANSPORT_RUB.CURRENCY];

      const UF_PURCHASE_TRANSPORT_VAL = {};
      UF_PURCHASE_TRANSPORT_VAL.VALUE = Number(item.querySelector('[data-name="UF_PURCHASE_TRANSPORT_VAL"]').querySelector('input').value);
      UF_PURCHASE_TRANSPORT_VAL.CURRENCY = item.querySelector('[data-name="UF_PURCHASE_TRANSPORT_VAL"]').querySelector('select').value;
      UF_PURCHASE_TRANSPORT_VAL.RUB = UF_PURCHASE_TRANSPORT_VAL.VALUE * EXCHANGE[UF_PURCHASE_TRANSPORT_VAL.CURRENCY];

      const UF_PURCHASE_DUTY = {};
      UF_PURCHASE_DUTY.VALUE = Number(item.querySelector('[data-name="UF_PURCHASE_DUTY"]').querySelector('input').value);
      UF_PURCHASE_DUTY.CURRENCY = item.querySelector('[data-name="UF_PURCHASE_DUTY"]').querySelector('select').value;
      UF_PURCHASE_DUTY.RUB = UF_PURCHASE_DUTY.VALUE * EXCHANGE[UF_PURCHASE_DUTY.CURRENCY];

      const UF_PURCHASE_INSURANCE = {};
      UF_PURCHASE_INSURANCE.VALUE = Number(item.querySelector('[data-name="UF_PURCHASE_INSURANCE"]').querySelector('input').value);
      UF_PURCHASE_INSURANCE.CURRENCY = item.querySelector('[data-name="UF_PURCHASE_INSURANCE"]').querySelector('select').value;
      UF_PURCHASE_INSURANCE.RUB = UF_PURCHASE_INSURANCE.VALUE * EXCHANGE[UF_PURCHASE_INSURANCE.CURRENCY];

      const UF_DECLARATION = {};
      UF_DECLARATION.VALUE = Number(item.querySelector('[data-name="UF_DECLARATION"]').querySelector('input').value);
      UF_DECLARATION.CURRENCY = item.querySelector('[data-name="UF_DECLARATION"]').querySelector('select').value;
      UF_DECLARATION.RUB = UF_DECLARATION.VALUE * EXCHANGE[UF_DECLARATION.CURRENCY];


      const UF_COST_PER_UNIT = {};
      UF_COST_PER_UNIT.VALUE = Number(item.querySelector('[data-name="UF_COST_PER_UNIT"]').querySelector('input').value);

      const UF_PROFIT_RATE_PERCENTAGE = {};
      UF_PROFIT_RATE_PERCENTAGE.VALUE = Number(item.querySelector('[data-name="UF_PROFIT_RATE_PERCENTAGE"]').querySelector('input').value);

      const UF_PRICE_PER_UNIT = {};
      UF_PRICE_PER_UNIT.VALUE = Number(item.querySelector('[data-name="UF_PRICE_PER_UNIT"]').querySelector('input').value);

      const UF_PRODUCT_PRICE_NO_NDS = {};
      UF_PRODUCT_PRICE_NO_NDS.VALUE = Number(item.querySelector('[data-name="UF_PRODUCT_PRICE_NO_NDS"]').querySelector('input').value);

      const UF_NDS = {};
      UF_NDS.VALUE = Number(item.querySelector('[data-name="UF_NDS"]').querySelector('input').value);

      const UF_PRODUCT_PRICE_NDS = {};
      UF_PRODUCT_PRICE_NDS.VALUE = Number(item.querySelector('[data-name="UF_PRODUCT_PRICE_NDS"]').querySelector('input').value);


      // Список автоматически вычисляемых полей.
      fields.forEach((field) => {
        const fieldName = field.dataset.name;

        if (fieldName == 'UF_PURCHASE_DUTY') {
          UF_PURCHASE_DUTY_SUM.RUB += UF_PURCHASE_DUTY.RUB;
        }
        if (fieldName == 'UF_PURCHASE_INSURANCE') {
          UF_PURCHASE_INSURANCE_SUM.RUB += UF_PURCHASE_INSURANCE.RUB;
        }

        if (fieldName == 'UF_PURCHASE_TRANSPORT_RUB') {
          UF_PURCHASE_TRANSPORT_SUM.RUB += UF_PURCHASE_TRANSPORT_RUB.RUB;
        }

        if (fieldName == 'UF_PURCHASE_TRANSPORT_VAL') {
          UF_PURCHASE_TRANSPORT_SUM.RUB += UF_PURCHASE_TRANSPORT_VAL.RUB;
        }

        if (fieldName == 'UF_PURCHASE_PRICE') {
          UF_PURCHASE_PRICE.VALUE = UF_PRICE.VALUE * UF_QUANTITY;
          field.querySelector('input').value = UF_PURCHASE_PRICE.VALUE;

          UF_PURCHASE_PRICE.CURRENCY = UF_PRICE.CURRENCY;
          field.querySelector('select').value = UF_PURCHASE_PRICE.CURRENCY;

          UF_PURCHASE_PRICE.RUB = UF_PURCHASE_PRICE.VALUE * EXCHANGE[UF_PURCHASE_PRICE.CURRENCY];
          UF_PURCHASE_PRICE_SUM.RUB += UF_PURCHASE_PRICE.RUB;
        }

        // Это поле задаёт дальнейшую валюту по умолчанию, т.е. евро.
        if (fieldName == 'UF_COST_PER_UNIT') {
          const RUB = UF_PURCHASE_PRICE.RUB + UF_PURCHASE_TRANSPORT_RUB.RUB + UF_PURCHASE_TRANSPORT_VAL.RUB + UF_PURCHASE_DUTY.RUB + UF_DECLARATION.RUB;
          const CURRENCY = field.querySelector('select').value;
          UF_COST_PER_UNIT.VALUE = exchange(RUB, CURRENCY);
          field.querySelector('input').value = UF_COST_PER_UNIT.VALUE;

          UF_COST_PER_UNIT_SUM.RUB += RUB;
        }

        if (UF_PAY_TYPE == 'Тендер') {
          if (fieldName == 'UF_PRICE_PER_UNIT') {
            field.removeAttribute('disabled');
          }
          if (fieldName == 'UF_PROFIT_RATE_PERCENTAGE') {
            field.setAttribute('disabled', 'disabled');
            UF_PROFIT_RATE_PERCENTAGE.VALUE = rounded(((UF_PRICE_PER_UNIT.VALUE / UF_COST_PER_UNIT.VALUE) - 1) * 100);
            field.querySelector('input').value = UF_PROFIT_RATE_PERCENTAGE.VALUE;
          }
        } else {
          if (fieldName == 'UF_PROFIT_RATE_PERCENTAGE') {
            field.removeAttribute('disabled');
          }
          if (fieldName == 'UF_PRICE_PER_UNIT') {
            field.setAttribute('disabled', 'disabled');
            UF_PRICE_PER_UNIT.VALUE = rounded(UF_COST_PER_UNIT.VALUE * (100 + UF_PROFIT_RATE_PERCENTAGE.VALUE) / 100);
            field.querySelector('input').value = UF_PRICE_PER_UNIT.VALUE;
          }
        }

        if (fieldName == 'UF_PRODUCT_PRICE_NO_NDS') {
          UF_PRODUCT_PRICE_NO_NDS.VALUE = rounded(UF_PRICE_PER_UNIT.VALUE * UF_QUANTITY);
          field.querySelector('input').value = UF_PRODUCT_PRICE_NO_NDS.VALUE;

          UF_PRODUCT_PRICE_NO_NDS_SUM.VALUE += UF_PRODUCT_PRICE_NO_NDS.VALUE;
        }

        if (fieldName == 'UF_NDS') {
          if (UF_REALIZ_PLACE == 'Россия') {
            UF_NDS.VALUE = rounded(UF_PRODUCT_PRICE_NO_NDS.VALUE * 0.2);
          } else {
            UF_NDS.VALUE = rounded(0);
          }
          field.querySelector('input').value = UF_NDS.VALUE;
        }

        if (fieldName == 'UF_PRODUCT_PRICE_NDS') {
          UF_PRODUCT_PRICE_NDS.VALUE = rounded(UF_PRODUCT_PRICE_NO_NDS.VALUE + UF_NDS.VALUE);
          field.querySelector('input').value = UF_PRODUCT_PRICE_NDS.VALUE;
        }
      });
    });

    // Вывод данных в итоговый блок.
    const totalFields = trade.querySelectorAll('.total__cell--price');
    totalFields.forEach((field) => {
      const fieldName = field.dataset.name;

      if (fieldName == 'UF_PURCHASE_PRICE_SUM') {
        UF_PURCHASE_PRICE_SUM.VALUE = exchange(UF_PURCHASE_PRICE_SUM.RUB, UF_PURCHASE_PRICE_SUM.CURRENCY);
        field.querySelector('.total__value').textContent = numberSplitter(UF_PURCHASE_PRICE_SUM.VALUE);
      }

      if (fieldName == 'UF_PURCHASE_TRANSPORT_SUM') {
        console.log(UF_PURCHASE_TRANSPORT_SUM);
        UF_PURCHASE_TRANSPORT_SUM.VALUE = exchange(UF_PURCHASE_TRANSPORT_SUM.RUB, UF_PURCHASE_TRANSPORT_SUM.CURRENCY);
        field.querySelector('.total__value').textContent = numberSplitter(UF_PURCHASE_TRANSPORT_SUM.VALUE);
      }

      if (fieldName == 'UF_PURCHASE_DUTY_SUM') {
        UF_PURCHASE_DUTY_SUM.VALUE = exchange(UF_PURCHASE_DUTY_SUM.RUB, UF_PURCHASE_DUTY_SUM.CURRENCY);
        field.querySelector('.total__value').textContent = numberSplitter(UF_PURCHASE_DUTY_SUM.VALUE);
      }

      if (fieldName == 'UF_PURCHASE_INSURANCE_SUM') {
        UF_PURCHASE_INSURANCE_SUM.VALUE = exchange(UF_PURCHASE_INSURANCE_SUM.RUB, UF_PURCHASE_INSURANCE_SUM.CURRENCY);
        field.querySelector('.total__value').textContent = numberSplitter(UF_PURCHASE_INSURANCE_SUM.VALUE);
      }

      if (fieldName == 'UF_COST_PER_UNIT_SUM') {
        UF_COST_PER_UNIT_SUM.VALUE = exchange(UF_COST_PER_UNIT_SUM.RUB, UF_COST_PER_UNIT_SUM.CURRENCY);
        field.querySelector('.total__value').textContent = numberSplitter(UF_COST_PER_UNIT_SUM.VALUE);
      }

      if (fieldName == 'UF_PRODUCT_PRICE_NO_NDS_SUM') {
        field.querySelector('.total__value').textContent = numberSplitter(UF_PRODUCT_PRICE_NO_NDS_SUM.VALUE);
      }

      if (fieldName == 'PROFIT_RATE') {
        const value = rounded((UF_PRODUCT_PRICE_NO_NDS_SUM.VALUE / UF_COST_PER_UNIT_SUM.VALUE - 1) * 100);
        field.querySelector('.total__value').textContent = numberSplitter(value);
      }
    });
  }
};


const initSelect = () => {
  const selects = document.querySelectorAll('.trade-card__select:not(.trade-card__select--js)');
  if (selects.length > 0) {
    selects.forEach((select) => {
      if (!select.classList.contains('trade-card__select--js')) {
        select.classList.add('trade-card__select--js');
        const select2 = $(select).select2({
          minimumResultsForSearch: Infinity,
          allowHtml: true,
        });

        select2.on('change', function () {
          updateFormValue();
        });
      }
    });
  }
};


const trade = document.querySelector('.trade');
if (trade) {
  const form = document.querySelector('.trade__form');
  if (form) {
    form.addEventListener('change', (evt) => {
      updateFormValue();
    });
  }

  const addNewTradeCard = (data) => {
    const {
      ID,
      UF_DECLARATION,
      UF_DELIVERY_DATE,
      UF_MANUFACTURER,
      UF_POS_CATALOG,
      UF_POS_NAME,
      UF_PRICE,
      UF_PROVIDER,
      UF_PURCHASE_BASIS,
      UF_PURCHASE_DUTY,
      UF_PURCHASE_INSURANCE,
      UF_PURCHASE_PRICE,
      UF_PURCHASE_TRANSPORT_RUB,
      UF_PURCHASE_TRANSPORT_VAL,
      UF_QUANTITY,
      UF_TRANSPORT_TYPE,
      UF_UNIT,
    } = data;

    const templateContent = trade.querySelector('#trade-card').content.cloneNode(true);
    const tradeCard = templateContent.querySelector('.trade-card');
    tradeCard.querySelector('.trade-card__number').textContent = ID;

    tradeCard.querySelector('[data-name="UF_DECLARATION"]').querySelector('select').value = UF_DECLARATION.CURRENCY;
    tradeCard.querySelector('[data-name="UF_DECLARATION"]').querySelector('input').value = UF_DECLARATION.VALUE;

    tradeCard.querySelector('[data-name="UF_DELIVERY_DATE"]').querySelector('input').value = UF_DELIVERY_DATE;

    tradeCard.querySelector('[data-name="UF_MANUFACTURER"]').querySelector('select').value = UF_MANUFACTURER;

    tradeCard.querySelector('[data-name="UF_POS_NAME"]').querySelector('input').value = UF_POS_NAME;

    tradeCard.querySelector('[data-name="UF_PRICE"]').querySelector('select').value = UF_PRICE.CURRENCY;
    tradeCard.querySelector('[data-name="UF_PRICE"]').querySelector('input').value = UF_PRICE.VALUE;

    tradeCard.querySelector('[data-name="UF_PRICE"]').querySelector('select').value = UF_PRICE.CURRENCY;
    tradeCard.querySelector('[data-name="UF_PRICE"]').querySelector('input').value = UF_PRICE.VALUE;

    tradeCard.querySelector('[data-name="UF_PROVIDER"]').querySelector('select').value = UF_PROVIDER;

    tradeCard.querySelector('[data-name="UF_PURCHASE_BASIS"]').querySelector('select').value = UF_PURCHASE_BASIS;

    tradeCard.querySelector('[data-name="UF_PURCHASE_DUTY"]').querySelector('select').value = UF_PURCHASE_DUTY.CURRENCY;
    tradeCard.querySelector('[data-name="UF_PURCHASE_DUTY"]').querySelector('input').value = UF_PURCHASE_DUTY.VALUE;

    tradeCard.querySelector('[data-name="UF_PURCHASE_INSURANCE"]').querySelector('select').value = UF_PURCHASE_INSURANCE.CURRENCY;
    tradeCard.querySelector('[data-name="UF_PURCHASE_INSURANCE"]').querySelector('input').value = UF_PURCHASE_INSURANCE.VALUE;

    tradeCard.querySelector('[data-name="UF_PURCHASE_TRANSPORT_RUB"]').querySelector('select').value = UF_PURCHASE_TRANSPORT_RUB.CURRENCY;
    tradeCard.querySelector('[data-name="UF_PURCHASE_TRANSPORT_RUB"]').querySelector('input').value = UF_PURCHASE_TRANSPORT_RUB.VALUE;

    tradeCard.querySelector('[data-name="UF_PURCHASE_TRANSPORT_VAL"]').querySelector('select').value = UF_PURCHASE_TRANSPORT_VAL.CURRENCY;
    tradeCard.querySelector('[data-name="UF_PURCHASE_TRANSPORT_VAL"]').querySelector('input').value = UF_PURCHASE_TRANSPORT_VAL.VALUE;

    tradeCard.querySelector('[data-name="UF_QUANTITY"]').querySelector('input').value = UF_QUANTITY;

    tradeCard.querySelector('[data-name="UF_TRANSPORT_TYPE"]').querySelector('select').value = UF_TRANSPORT_TYPE;

    tradeCard.querySelector('[data-name="UF_UNIT"]').querySelector('select').value = UF_UNIT;


    const tradeAction = tradeCard.querySelector('.trade-action');
    if (tradeAction) {
      const deleteButton = tradeCard.querySelector('.trade-action__delete');
      if (deleteButton) {
        deleteButton.addEventListener('click', () => {
          tradeCard.remove();
          updateFormValue();
        });
      }
    }

    trade.querySelector('.trade__table').appendChild(templateContent);

    window.Corners5ProjectLayout.initDeliveryDate();
    updateFormValue();
  };

  document.querySelector('.addTradeOne').addEventListener('click', () => {
    FULL.FIELDS.forEach((item) => {
      addNewTradeCard(item);
    });
  });
  document.querySelector('.addTradeTwo').addEventListener('click', () => {
    EMPTY.FIELDS.forEach((item) => {
      addNewTradeCard(item);
    });
  });
  document.querySelector('.removeTradeOne').addEventListener('click', () => {
    const tradeCard = document.querySelector('.trade-card');
    if (tradeCard) {
      tradeCard.remove();
      updateFormValue();
    }
  });
}
