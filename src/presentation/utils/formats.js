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

export const dateTimeFormat = (value, countryLanguage = 'pt-BR') => {
  const options1 = {
    hour: 'numeric',
    minute: 'numeric',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  const date = value ? new Date(value) : new Date();
  return new Intl.DateTimeFormat(countryLanguage, options1).format(date);
};
