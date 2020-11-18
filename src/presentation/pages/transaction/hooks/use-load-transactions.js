import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import {
  transactionListAtom,
  warningApplicationAtom,
} from '@presentation/atoms/atoms';

const useLoadTransactions = (loadTransactions) => {
  const [transactionsList, setTransactionsList] = useRecoilState(
    transactionListAtom
  );
  const [, setWarning] = useRecoilState(warningApplicationAtom);

  const hasTransactions = !!transactionsList.length;

  useEffect(() => {
    if (!hasTransactions) {
      loadTransactions()
        .then((transactions) => {
          if (!transactions.length) {
            return;
          }

          const filteredTransactions = transactions.filter(
            (item) =>
              item.amount &&
              item.credit_card_holder_name &&
              item.credit_card_cvv
          );

          setTransactionsList(() => filteredTransactions);
        })
        .catch(() => {
          setWarning({
            enable: true,
            message: 'Houve erro ao carregar os dados!',
          });
        });
    }
  }, []);

  return {
    transactionsList,
  };
};

export default useLoadTransactions;
