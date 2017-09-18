import { actionTypes } from '../actions/stash';

const defaultState = {
  name: 'Rovan',
  platinumPieces: 1,
  goldPieces: 1,
  silverPieces: 1,
  copperPieces: 1,
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
        platinumPieces: state.platinumPieces + action.platinumPieces,
        goldPieces: state.goldPieces + action.goldPieces,
        silverPieces: state.silverPieces + action.silverPieces,
        copperPieces: state.copperPieces + action.copperPieces,
        platinumTransactionValue: 0,
        goldTransactionValue: 0,
        silverTransactionValue: 0,
        copperTransactionValue: 0,
      };

    case actionTypes.WITHDRAWAL:
      return {
        ...state,
        platinumPieces: state.platinumPieces - action.platinumPieces,
        goldPieces: state.goldPieces - action.goldPieces,
        silverPieces: state.silverPieces - action.silverPieces,
        copperPieces: state.copperPieces - action.copperPieces,
        platinumTransactionValue: 0,
        goldTransactionValue: 0,
        silverTransactionValue: 0,
        copperTransactionValue: 0
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
