import { createSelector } from 'reselect';

const getPlatinumSelector = state => state.stash.platinum;
const getGoldSelector = state => state.stash.gold;
const getSilverSelector = state => state.stash.silver;
const getCopperSelector = state => state.stash.copper;
const getTransactions = state => state.transactions;

export const getCopperTotal = createSelector(
  [getPlatinumSelector, getGoldSelector, getSilverSelector, getCopperSelector],
  (platinum, gold, silver, copper) => {
    return (platinum * 1000) + (gold * 100) + (silver * 10) + (copper);
  }
);

export const getWithdrawalTotal = createSelector(
  [getTransactions],
  (transactions) => {
    return transactions.reduce((total, transaction) => { 
      return (transaction.type === 'Withdrawal') ? transaction.amount : 0
    });
  }
);

export const getDepositTotal = createSelector(
  [getTransactions],
  (transactions) => {
    return transactions.reduce((total, transaction) => { 
      return (transaction.type === 'Deposit') ? transaction.amount : 0
    });
  }
);