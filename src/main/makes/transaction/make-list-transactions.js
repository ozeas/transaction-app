import { RemoteListTransactions } from '@data';
import { makeHostApi, makeFetchClient } from '@main/makes';
import { ListTransactions } from '@domain/transaction';

const remoteListTransaction = new RemoteListTransactions(
  makeHostApi('transactions'),
  makeFetchClient().request
);

export const makeListTransactions = async () =>
  await new ListTransactions(remoteListTransaction).getList();
