export const fields = {
  defaultConfigs: [
    {
      identifier: 'credit_card_holder_name',
      label: 'Nome da pessoa compradora',
      format: null,
      mode: 'default',
      validate: { required: true, minLength: 2 },
    },
    {
      identifier: 'buyer_document',
      label: 'CPF',
      format: '###.###.###-##',
      mode: 'masked',
      validate: { required: true, maxLength: 11, minLength: 11 },
      removeMask: (value) => value.replace(/\./g, '').replace('-', ''),
    },
    {
      identifier: 'credit_card_number',
      label: 'Nº do cartão',
      format: '#### #### #### ####',
      mode: 'masked',
      validate: { required: true, maxLength: 16, minLength: 16 },
      removeMask: (value) => value.replace(/ /g, ''),
    },
    {
      identifier: 'credit_card_expiration_date',
      label: 'Data de expiração',
      format: '##/##',
      mode: 'masked',
      validate: { required: true, maxLength: 4, minLength: 4 },
      removeMask: (value) => value.replace('/', ''),
    },
    {
      identifier: 'credit_card_cvv',
      label: 'CVV',
      format: '###',
      mode: 'masked',
      validate: { required: true, maxLength: 3, minLength: 3 },
    },
  ],
  currencyConfigs: {
    identifier: 'amount',
    label: 'Valor da transação',
    mode: 'masked',
    validate: { required: true },
    removeMask: (value) =>
      value.replace('R$', '').replace(/\./g, '').replace(',', '.'),
  },
};
