const FULL = {
  "DEAL_ID": 999, //ID сделки
  "READ_ONLY": "N", //Только чтение Y или N
  "UF_REALIZ_PLACE": "Россия",
  "UF_PAY_TYPE": "Тендер", // Тип расчета
  "FIELDS": [ // Массив с элементами ТЭО
    {
      "ID": 1, // ID элемента ТЭО
      "UF_POS_NAME": "Наименование позиции 1", //Наименование позиции
      "UF_UNIT": "шт", // Ед измерения
      "UF_PRICE": { // Цена за единицу
        "CURRENCY": "RUB",
        "VALUE": 1000,
      },
      "UF_POS_CATALOG": 1000, //ID товара в каталоге
      "UF_QUANTITY": 1, // Количество
      "UF_MANUFACTURER": 4, // Производитель (ид компании)
      "UF_PROVIDER": 3, // Поставщик (ид компании)
      "UF_DELIVERY_DATE": "2025-12-28", //Дата поставки
      "UF_PURCHASE_PRICE": { // Цена закупки за ед.
        "CURRENCY": "RUB",
        "VALUE": 500,
      },
      "UF_PURCHASE_BASIS": "DDP", // Базис закупки
      "UF_TRANSPORT_TYPE": "Мульти", // Вид транспорта
      "UF_PURCHASE_TRANSPORT_RUB": { // Расходы на закупку: Транспорт рубли
        "CURRENCY": "RUB",
        "VALUE": 200,
      },
      "UF_PURCHASE_TRANSPORT_VAL": { // Расходы на закупку: Транспорт валюта
        "CURRENCY": "EUR",
        "VALUE": 2,
      },
      "UF_PURCHASE_DUTY": { // Расходы на закупку: Пошлина + ЕТП
        "CURRENCY": "EUR",
        "VALUE": 20,
      },
      "UF_PURCHASE_INSURANCE": { // Расходы на закупку: Страхование
        "CURRENCY": "EUR",
        "VALUE": 200,
      },
      "UF_DECLARATION": { // Декларирование
        "CURRENCY": "EUR",
        "VALUE": 200,
      },
      "DEAL_ID": 999, // ID сделки
    },
    {
      "ID": 2, // ID элемента ТЭО
      "UF_POS_NAME": "Наименование позиции 2",
      "UF_UNIT": "месяц",
      "UF_PRICE": {
        "CURRENCY": "RUB",
        "VALUE": 10000,
      },
      "UF_POS_CATALOG": 1200,
      "UF_QUANTITY": 12,
      "UF_MANUFACTURER": 1,
      "UF_PROVIDER": 2,
      "UF_DELIVERY_DATE": "2024-10-21",
      "UF_PURCHASE_PRICE": {
        "CURRENCY": "RUB",
        "VALUE": 9000,
      },
      "UF_PURCHASE_BASIS": "DDP",
      "UF_TRANSPORT_TYPE": "Авто",
      "UF_PURCHASE_TRANSPORT_RUB": {
        "CURRENCY": "RUB",
        "VALUE": 2000,
      },
      "UF_PURCHASE_TRANSPORT_VAL": {
        "CURRENCY": "EUR",
        "VALUE": 20,
      },
      "UF_PURCHASE_DUTY": {
        "CURRENCY": "EUR",
        "VALUE": 200,
      },
      "UF_PURCHASE_INSURANCE": {
        "CURRENCY": "EUR",
        "VALUE": 2000,
      },
      "UF_DECLARATION": {
        "CURRENCY": "EUR",
        "VALUE": 2000,
      },
      "DEAL_ID": 999,
    }
  ]
};

const EMPTY = {
  "DEAL_ID": 999, //ID сделки
  "READ_ONLY": "N", //Только чтение Y или N
  "UF_PAY_TYPE": "",
  "UF_REALIZ_PLACE": "",
  "FIELDS": [ // Массив с элементами ТЭО
    {
      "ID": 11,
      "UF_POS_NAME": "Наименование новой позиции с длинным названием",
      "UF_UNIT": "шт",
      "UF_PRICE": {
        "CURRENCY": "RUB",
        "VALUE": 1000,
      },
      "UF_POS_CATALOG": 1234,
      "UF_QUANTITY": 0,
      "UF_MANUFACTURER": 0,
      "UF_PROVIDER": 0,
      "UF_DELIVERY_DATE": "",
      "UF_PURCHASE_PRICE": {
        "CURRENCY": "RUB",
        "VALUE": 0,
      },
      "UF_PURCHASE_BASIS": "",
      "UF_TRANSPORT_TYPE": "",
      "UF_PURCHASE_TRANSPORT_RUB": {
        "CURRENCY": "RUB",
        "VALUE": 0,
      },
      "UF_PURCHASE_TRANSPORT_VAL": {
        "CURRENCY": "EUR",
        "VALUE": 0,
      },
      "UF_PURCHASE_DUTY": {
        "CURRENCY": "EUR",
        "VALUE": 0,
      },
      "UF_PURCHASE_INSURANCE": {
        "CURRENCY": "EUR",
        "VALUE": 0,
      },
      "UF_DECLARATION": {
        "CURRENCY": "EUR",
        "VALUE": 0,
      }
    }
  ]
};