import { actionTypes } from '../actions/stash';

const defaultState = {
  name: 'Rovan',
  platinumPieces: 1,
  goldPieces: 1,
  silverPieces: 1,
  copperPieces: 1
};

const stashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.DEPOSIT:
      return {
        ...state,
        platinumPieces: state.platinumPieces + action.platinumPieces,
        goldPieces: state.goldPieces + action.goldPieces,
        silverPieces: state.silverPieces + action.silverPieces,
        copperPieces: state.copperPieces + action.copperPieces
      };

    case actionTypes.WITHDRAWAL:
      return {
        ...state,
        platinumPieces: state.platinumPieces - action.platinumPieces,
        goldPieces: state.goldPieces - action.goldPieces,
        silverPieces: state.silverPieces - action.silverPieces,
        copperPieces: state.copperPieces - action.copperPieces
      };

    default:
      return state;
  }
};

export default stashReducer;
