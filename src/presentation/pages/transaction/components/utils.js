export const inputNames = [
  'credit_card_holder_name',
  'buyer_document',
  'credit_card_number',
  'credit_card_expiration_date',
  'credit_card_cvv',
  'amount',
];

export const [
  HOLDER_NAME_FIELD,
  BUYER_DOCUMENT_FIELD,
  CARD_NUMBER_FIELD,
  EXPIRATION_DATE_FIELD,
  CARD_CVV_FIELD,
  AMOUNT_FIELD,
] = inputNames;

export const unmaskFieldsFunctions = {
  [BUYER_DOCUMENT_FIELD]: (value) => value.replace(/\./g, '').replace('-', ''),
  [CARD_NUMBER_FIELD]: (value) => value.replace(/ /g, ''),
  [EXPIRATION_DATE_FIELD]: (value) => value.replace('/', ''),
  [AMOUNT_FIELD]: (value) =>
    value.replace('R$ ', '').replace(/\./g, '').replace(',', '.'),
};

export const fields = {
  defaultConfigs: [
    {
      identifier: HOLDER_NAME_FIELD,
      label: 'Nome da pessoa compradora',
      format: null,
      mode: 'default',
      validate: { required: true, minLength: 2 },
    },
    {
      identifier: BUYER_DOCUMENT_FIELD,
      label: 'CPF',
      format: '###.###.###-##',
      mode: 'masked',
      validate: { required: true, maxLength: 11, minLength: 11 },
      removeMask: unmaskFieldsFunctions[BUYER_DOCUMENT_FIELD],
    },
    {
      identifier: CARD_NUMBER_FIELD,
      label: 'Nº do cartão',
      format: '#### #### #### ####',
      mode: 'masked',
      validate: { required: true, maxLength: 16, minLength: 16 },
      removeMask: unmaskFieldsFunctions[CARD_NUMBER_FIELD],
    },
    {
      identifier: EXPIRATION_DATE_FIELD,
      label: 'Data de expiração',
      format: '##/##',
      mode: 'masked',
      validate: { required: true, maxLength: 4, minLength: 4 },
      removeMask: unmaskFieldsFunctions[EXPIRATION_DATE_FIELD],
    },
    {
      identifier: CARD_CVV_FIELD,
      label: 'CVV',
      format: '###',
      mode: 'masked',
      validate: { required: true, maxLength: 3, minLength: 3 },
    },
  ],
  currencyConfigs: {
    identifier: AMOUNT_FIELD,
    label: 'Valor da transação',
    mode: 'masked',
    validate: { required: true },
    removeMask: unmaskFieldsFunctions[AMOUNT_FIELD],
  },
};
