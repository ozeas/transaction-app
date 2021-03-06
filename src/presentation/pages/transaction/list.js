import React from 'react';
import { func } from 'prop-types';
import { useRecoilValue } from 'recoil';

import { warningApplicationAtom } from '@presentation/atoms/atoms';
import { Button, Flex, Notification, Text } from '@components';
import {
  Container,
  Header,
  Main,
  NetworkWarning,
} from '@presentation/pages/components';
import { ListHeader, TransactionItem } from './components';
import useLoadTransactions from './hooks/use-load-transactions';
import useOnline from '@presentation/pages/hooks/use-online';

const getTransactionsValues = (transactionsAll) => {
  useOnline();
  const amount = transactionsAll.reduce(
    (acc, actual) => (actual.amount ? acc + parseFloat(actual.amount) : acc),
    0
  );

  const amountTransactions = transactionsAll.length;

  return {
    amount,
    amountTransactions,
  };
};

const List = ({ loadTransactionList }) => {
  const { transactionsList } = useLoadTransactions(loadTransactionList);
  const { amount = 0, amountTransactions = 0 } = getTransactionsValues(
    transactionsList
  );
  const notification = useRecoilValue(warningApplicationAtom);

  return (
    <Container>
      <NetworkWarning />
      {notification.enable && <Notification message={notification.message} />}
      <Header>
        <Flex ml={3} mt="21px" mb={4}>
          <ListHeader amount={amount} amountTransactions={amountTransactions} />
        </Flex>
      </Header>
      <Main>
        {transactionsList.length ? (
          transactionsList.map(({ id, amount, ...props }) => (
            <TransactionItem key={id} amount={parseFloat(amount)} {...props} />
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
