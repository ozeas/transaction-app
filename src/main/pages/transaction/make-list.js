import React from 'react';

import { List } from '@presentation/pages/transaction';
import { makeListTransactions } from '@main/makes';

const makeList = () => <List loadTransactionList={makeListTransactions} />;

export default makeList;
