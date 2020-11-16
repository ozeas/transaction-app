export const currencyFormat = (
  value,
  countryLanguage = 'pt-BR',
  currencySimbol = 'BRL'
) =>
  new Intl.NumberFormat(countryLanguage, {
    style: 'currency',
    currency: currencySimbol,
  }).format(value);

export const numberFormat = (value, countryLanguage = 'pt-BR') =>
  new Intl.NumberFormat(countryLanguage, { style: 'decimal' }).format(value);
