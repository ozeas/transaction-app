import React from 'react';

import { Create } from '@presentation/pages/transaction';
import { makeCreateTransactions } from '@main/makes';

const makeCreate = () => <Create createTransaction={makeCreateTransactions} />;

export default makeCreate;
