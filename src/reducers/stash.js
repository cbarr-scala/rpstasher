import { actionTypes } from '../actions/stash';

const defaultState = {
  stash: {
    platinum: 3,
    gold: 642,
    silver: 431,
    copper: 5345,
  },
  transactions: [],
  sourceTransactionValue: '',
  platinumTransactionValue: 0,
  goldTransactionValue: 0,
  silverTransactionValue: 0,
  copperTransactionValue: 0
};

const stash = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.DEPOSIT:
      return {
        ...state,
        stash: {
          platinum: state.stash.platinum + action.transactionDetails.platinum,
          gold: state.stash.gold + action.transactionDetails.gold,
          silver: state.stash.silver + action.transactionDetails.silver,
          copper: state.stash.copper + action.transactionDetails.copper,
        },
        platinumTransactionValue: 0,
        goldTransactionValue: 0,
        silverTransactionValue: 0,
        copperTransactionValue: 0,
        sourceTransactionValue: ''
      };

    case actionTypes.WITHDRAWAL:
      return {
        ...state,
        stash: {
          platinum: state.stash.platinum - action.transactionDetails.platinum,
          gold: state.stash.gold - action.transactionDetails.gold,
          silver: state.stash.silver - action.transactionDetails.silver,
          copper: state.stash.copper - action.transactionDetails.copper,
        },
        platinumTransactionValue: 0,
        goldTransactionValue: 0,
        silverTransactionValue: 0,
        copperTransactionValue: 0,
        sourceTransactionValue: ''
      };

    case actionTypes.CHANGE_SOURCE_TRANSACTION_VALUE:
      return {
        ...state,
        sourceTransactionValue: action.value
      };

    case actionTypes.CHANGE_PLATINUM_TRANSACTION_VALUE:
      return {
        ...state,
        platinumTransactionValue: action.value
      };

    case actionTypes.CHANGE_GOLD_TRANSACTION_VALUE:
      return {
        ...state,
        goldTransactionValue: action.value
      };

    case actionTypes.CHANGE_SILVER_TRANSACTION_VALUE:
      return {
        ...state,
        silverTransactionValue: action.value
      };

    case actionTypes.CHANGE_COPPER_TRANSACTION_VALUE:
      return {
        ...state,
        copperTransactionValue: action.value
      };

    default:
      return state;
  }
};

export default stash;
