import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { number, string } from 'prop-types';

import { Box, Flex, Text } from '@components';
import { currencyFormat, dateTimeFormat } from '@presentation/utils';
import { statusDictionary } from '@domain/transaction/utils';

const Container = styled(Box).attrs({
  height: '88px',
  p: 3,
})`
  box-sizing: border-box;
  border-bottom: 1px solid ${themeGet('colors.gray20')};
`;

const TransactionItem = ({
  amount,
  credit_card_holder_name,
  status,
  credit_card_pay_date,
}) => (
  <Container data-testid="transactions-list">
    <Flex justifyContent="space-between">
      <Text fontWeight="bold" color="gray500">
        {credit_card_holder_name}
      </Text>
      <Text fontSize={1} color="gray300" fontWeight="regular">
        {statusDictionary[status] || ''}
      </Text>
    </Flex>
    <Flex justifyContent="space-between" mt={2}>
      <Text fontWeight="regular">{dateTimeFormat(credit_card_pay_date)}</Text>
      <Text fontWeight="bold" color="gray700">
        {currencyFormat(amount || 0)}
      </Text>
    </Flex>
  </Container>
);

TransactionItem.propTypes = {
  amount: number.isRequired,
  credit_card_holder_name: string.isRequired,
  status: string.isRequired,
  credit_card_pay_date: string,
};

export default TransactionItem;
