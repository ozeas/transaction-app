import React from 'react';
import { number, arrayOf, shape, string } from 'prop-types';

import { Button, Flex, Text } from '@components';
import { Container, Header, Main } from '@presentation/pages/components';
import { ListHeader, TransactionItem } from './components';

const List = ({ transactions, amount, amountTransactions }) => {
  const hasTransactions = !!transactions.length;

  return (
    <Container>
      <Header>
        <Flex ml={3} mt="21px" mb={4}>
          <ListHeader amount={amount} amountTransactions={amountTransactions} />
        </Flex>
      </Header>
      <Main>
        {hasTransactions ? (
          transactions.map((item) => (
            <TransactionItem key={item.id} {...item} />
          ))
        ) : (
          <Flex m={4} justifyContent="center">
            <Text>Não há transações cadastradas!</Text>
          </Flex>
        )}
        <Flex px={3} pt={3} justifyContent="center">
          <Button.Link to="/create" icon="add-fill" width={1}>
            Criar Transação
          </Button.Link>
        </Flex>
      </Main>
    </Container>
  );
};

List.defaultProps = {
  transactions: [],
};

List.propTypes = {
  transactions: arrayOf(shape({ status: string, amount: number, date: string }))
    .isRequired,
  amount: number.isRequired,
  amountTransactions: number.isRequired,
};

export default List;
