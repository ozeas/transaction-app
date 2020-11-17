import { useState, useEffect } from 'react';

const useLoadTransactions = (loadTransactions) => {
  const [result, setResult] = useState({
    amount: 0,
    amountTransactions: 0,
    transactions: [],
  });

  useEffect(() => {
    loadTransactions().then((transactions) => {
      if (!transactions.length) {
        return;
      }

      const filteredTransactions = transactions.filter(
        (item) =>
          item.amount && item.credit_card_holder_name && item.credit_card_cvv
      );

      const amount = filteredTransactions.reduce(
        (acc, actual) =>
          actual.amount ? acc + parseFloat(actual.amount) : acc,
        0
      );

      const amountTransactions = filteredTransactions.length;

      setResult({
        amount,
        amountTransactions,
        transactions: transactions.filter(
          (item) =>
            item.amount && item.credit_card_holder_name && item.credit_card_cvv
        ),
      });
    });
  }, []);

  return result;
};

export default useLoadTransactions;
