import React from 'react';
import { number } from 'prop-types';

import { Box, Text } from '@components';
import { currencyFormat, numberFormat } from '@presentation/utils';

const ListHeader = ({ amount, amountTransactions }) => (
  <Box width={1}>
    <Text fontSize={1} fontWeight="bold">
      Número de transações
    </Text>
    <Text
      mt={1}
      color="green100"
      fontSize="20px"
      lineHeight="32px"
      fontWeight="bold"
    >
      {numberFormat(amountTransactions)}
    </Text>
    <Text mt="24px" fontSize={1} fontWeight="bold">
      Valor total
    </Text>
    <Text mt={1} color="green100" fontSize="20px" fontWeight="bold">
      {currencyFormat(amount)}
    </Text>
  </Box>
);

ListHeader.defaultProps = {
  amount: 0,
  amountTransactions: 0,
};

ListHeader.propTypes = {
  amount: number.isRequired,
  amountTransactions: number.isRequired,
};

export default ListHeader;
