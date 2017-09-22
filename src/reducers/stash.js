import { actionTypes } from '../actions/stash';

const defaultState = {
  stash: {
    platinum: 1,
    gold: 1,
    silver: 1,
    copper: 1,
  },
  transactions: [],
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
          platinum: state.stash.platinum + action.amount.platinum,
          gold: state.stash.gold + action.amount.gold,
          silver: state.stash.silver + action.amount.silver,
          copper: state.stash.copper + action.amount.copper,
        }
      };

    case actionTypes.WITHDRAWAL:
      return {
        ...state,
        stash: {
          platinum: state.stash.platinum - action.amount.platinum,
          gold: state.stash.gold - action.amount.gold,
          silver: state.stash.silver - action.amount.silver,
          copper: state.stash.copper - action.amount.copper,
        }
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