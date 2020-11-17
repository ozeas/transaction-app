import { RemoteCreateTransaction } from '@data';
import { makeHostApi, makeFetchClient } from '@main/makes';
import { CreateTransaction } from '@domain/transaction';

const remoteCreateTransaction = new RemoteCreateTransaction(
  makeHostApi('transactions'),
  makeFetchClient().request
);

export const makeCreateTransactions = async (params) => {
  return await new CreateTransaction(remoteCreateTransaction).create(params);
};
