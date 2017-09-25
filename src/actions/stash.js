export const actionTypes = {
  DEPOSIT: 'STASH__DEPOSIT',
  WITHDRAWAL: 'STASH__WITHDRAWAL',
  CHANGE_SOURCE_TRANSACTION_VALUE: 'STASH__CHANGE_SOURCE_TRANSACTION_VALUE',
  CHANGE_PLATINUM_TRANSACTION_VALUE: 'STASH__CHANGE_PLATINUM_TRANSACTION_VALUE',
  CHANGE_GOLD_TRANSACTION_VALUE: 'STASH__CHANGE_GOLD_TRANSACTION_VALUE',
  CHANGE_SILVER_TRANSACTION_VALUE: 'STASH__CHANGE_SILVER_TRANSACTION_VALUE',
  CHANGE_COPPER_TRANSACTION_VALUE: 'STASH__CHANGE_COPPER_TRANSACTION_VALUE'
};

export const deposit = (transactionDetails) => ({
  type: actionTypes.DEPOSIT,
  transactionDetails
});

export const withdrawal = (transactionDetails) => ({
  type: actionTypes.WITHDRAWAL,
  transactionDetails
});

export const changeSourceTransactionValue = (value) => ({
  type: actionTypes.CHANGE_SOURCE_TRANSACTION_VALUE,
  value
});

export const changePlatinumTransactionValue = (value) => ({
  type: actionTypes.CHANGE_PLATINUM_TRANSACTION_VALUE,
  value
});

export const changeGoldTransactionValue = (value) => ({
  type: actionTypes.CHANGE_GOLD_TRANSACTION_VALUE,
  value
});

export const changeSilverTransactionValue = (value) => ({
  type: actionTypes.CHANGE_SILVER_TRANSACTION_VALUE,
  value
});

export const changeCopperTransactionValue = (value) => ({
  type: actionTypes.CHANGE_COPPER_TRANSACTION_VALUE,
  value
});
