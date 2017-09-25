import { actionTypes } from '../actions/stash';

const defaultState = {
  stash: {
    platinum: 3,
    gold: 642,
    silver: 431,
    copper: 5345,
  },
  transactions: [{
    type: 'Deposit',
    createdOn: new Date(),
    transactionDetails: {
      source: 'Young Dragon Slaying',
      platinum: 1,
      gold: 3,
      silver: 0,
      copper: 0
    }
  }, {
    type: 'Deposit',
    createdOn: new Date(),
    transactionDetails: {
      source: 'Goblin Massacre',
      platinum: 0,
      gold: 0,
      silver: 10,
      copper: 6453
    }
  }, {
    type: 'Withdrawal',
    createdOn: new Date(),
    transactionDetails: {
      source: 'Potion of Giant Strength',
      platinum: 0,
      gold: 1,
      silver: 0,
      copper: 0
    }
  }],
  sourceTransactionValue: '',
  platinumTransactionValue: 0,
  goldTransactionValue: 0,
  silverTransactionValue: 0,
  copperTransactionValue: 0
};

const stash = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.DEPOSIT: {
      const newState = {
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

      newState.transactions.push({
        type: 'Deposit',
        createdOn: new Date(),
        transactionDetails: action.transactionDetails
      });

      return newState;
    }

    case actionTypes.WITHDRAWAL: {
      const newState = {
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

      newState.transactions.push({
        type: 'Withdrawal',
        createdOn: new Date(),
        transactionDetails: action.transactionDetails
      });

      return newState;
    }

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
