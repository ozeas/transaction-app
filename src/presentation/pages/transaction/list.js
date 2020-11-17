import React from 'react';
import { func } from 'prop-types';

import { Button, Flex, Text } from '@components';
import { Container, Header, Main } from '@presentation/pages/components';
import { ListHeader, TransactionItem } from './components';
import useLoadTransactions from './hooks/use-load-transactions';

const List = ({ loadTransactionList }) => {
  const { amount, amountTransactions, transactions } = useLoadTransactions(
    loadTransactionList
  );

  return (
    <Container>
      <Header>
        <Flex ml={3} mt="21px" mb={4}>
          <ListHeader amount={amount} amountTransactions={amountTransactions} />
        </Flex>
      </Header>
      <Main>
        {transactions.length ? (
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
  loadTransactionList: () => {},
  statusDictionary: {},
};

List.propTypes = {
  loadTransactionList: func.isRequired,
};

export default List;
