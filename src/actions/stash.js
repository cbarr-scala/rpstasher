export const actionTypes = {
  DEPOSIT: 'STASH__DEPOSIT',
  WITHDRAWAL: 'STASH__WITHDRAWAL',
  CHANGE_PLATINUM_TRANSACTION_VALUE: 'STASH__CHANGE_PLATINUM_TRANSACTION_VALUE',
  CHANGE_GOLD_TRANSACTION_VALUE: 'STASH__CHANGE_GOLD_TRANSACTION_VALUE',
  CHANGE_SILVER_TRANSACTION_VALUE: 'STASH__CHANGE_SILVER_TRANSACTION_VALUE',
  CHANGE_COPPER_TRANSACTION_VALUE: 'STASH__CHANGE_COPPER_TRANSACTION_VALUE'
};

export const deposit = (amount) => ({
  type: actionTypes.DEPOSIT,
  amount
});

export const withdrawal = (amount) => ({
  type: actionTypes.WITHDRAWAL,
  amount
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
