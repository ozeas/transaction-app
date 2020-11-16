import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { Box, Flex, Text } from '@components';
import { currencyFormat } from '@presentation/utils';

const Container = styled(Box).attrs({
  height: '88px',
  p: 3,
})`
  box-sizing: border-box;
  border-bottom: 1px solid ${themeGet('colors.gray20')};
`;

const TransactionItem = () => (
  <Container>
    <Flex justifyContent="space-between">
      <Text fontWeight="bold" color="gray500">
        João Silva
      </Text>
      <Text fontSize={1} color="gray300" fontWeight="regular">
        Recusada
      </Text>
    </Flex>
    <Flex justifyContent="space-between" mt={2}>
      <Text fontWeight="regular">10/10/2020 10:30</Text>
      <Text fontWeight="bold" color="gray700">
        {currencyFormat(100)}
      </Text>
    </Flex>
  </Container>
);

export default TransactionItem;
