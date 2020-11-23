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
  let cleanWarning;

  useEffect(() => {
    if (!hasTransactions) {
      setWarning({
        enable: true,
        message: 'Carregando...',
      });
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
          setWarning({
            enable: false,
            message: '',
          });
        })
        .catch(() => {
          setWarning({
            enable: true,
            message: 'Houve erro ao carregar os dados!',
          });
        })
        .finally(() => {
          cleanWarning = setTimeout(() => {
            setWarning({
              enable: false,
              message: '',
            });
          }, 5000);
        });
    }

    return () => {
      clearTimeout(cleanWarning);
    };
  }, [transactionsList.length]);

  return {
    transactionsList,
  };
};

export default useLoadTransactions;
