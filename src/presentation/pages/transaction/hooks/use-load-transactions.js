import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { transactionListAtom } from '@presentation/atoms/atoms';

const useLoadTransactions = (loadTransactions) => {
  const [transactionsList, setTransactionsList] = useRecoilState(
    transactionListAtom
  );

  const hasTransactions = !!transactionsList.length;

  useEffect(() => {
    if (!hasTransactions) {
      loadTransactions().then((transactions) => {
        if (!transactions.length) {
          return;
        }

        const filteredTransactions = transactions.filter(
          (item) =>
            item.amount && item.credit_card_holder_name && item.credit_card_cvv
        );

        setTransactionsList(() => filteredTransactions);
      });
    }
  }, []);

  return {
    transactionsList,
  };
};

export default useLoadTransactions;
