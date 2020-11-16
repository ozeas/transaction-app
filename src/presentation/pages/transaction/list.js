import React from 'react';
import { number, arrayOf, shape, string } from 'prop-types';

import { Button, Flex } from '@components';
import { Container, Header, Main } from '@presentation/pages/components';
import { ListHeader, TransactionItem } from './components';

const List = ({ transactions, amount, amountTransactions }) => (
  <Container>
    <Header>
      <Flex ml={3} mt="21px" mb={4}>
        <ListHeader amount={amount} amountTransactions={amountTransactions} />
      </Flex>
    </Header>
    <Main>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <TransactionItem key={item} />
      ))}
      <Flex px={3} pt={3} justifyContent="center">
        <Button.Link to="/create" icon="add-fill" width={1}>
          Criar Transação
        </Button.Link>
      </Flex>
    </Main>
    {transactions}
  </Container>
);

List.propTypes = {
  transactions: arrayOf(shape({ status: string, amount: number, date: string }))
    .isRequired,
  amount: number.isRequired,
  amountTransactions: number.isRequired,
};

export default List;
