import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import {
  deposit,
  withdrawal,
  changePlatinumTransactionValue,
  changeGoldTransactionValue,
  changeSilverTransactionValue,
  changeCopperTransactionValue
} from '../actions/stash';

import { getTotalCopper } from '../selectors/stash';

const mapStateToProps = state => {
  return {
    platinum: state.stash.platinum,
    gold: state.stash.gold,
    silver: state.stash.silver,
    copper: state.stash.copper,
    platinumTransactionValue: state.platinumTransactionValue,
    goldTransactionValue: state.goldTransactionValue,
    silverTransactionValue: state.silverTransactionValue,
    copperTransactionValue: state.copperTransactionValue,

    totalCopper: getTotalCopper(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleWithdrawal: (platinum, gold, silver, copper) => {
      const amount = { 
        platinum, 
        gold, 
        silver,
        copper
      };

      dispatch(withdrawal(amount));
    },
    handleDeposit: (platinum, gold, silver, copper) => {
      const amount = { 
        platinum, 
        gold, 
        silver,
        copper
      };

      dispatch(deposit(amount));
    },
    handlePlatinumTransactionValueChange: (transactionValue) => {
      dispatch(changePlatinumTransactionValue(parseInt(transactionValue, 10)));
    },
    handleGoldTransactionValueChange: (transactionValue) => {
      dispatch(changeGoldTransactionValue(parseInt(transactionValue, 10)));
    },
    handleSilverTransactionValueChange: (transactionValue) => {
      dispatch(changeSilverTransactionValue(parseInt(transactionValue, 10)));
    },
    handleCopperTransactionValueChange: (transactionValue) => {
      dispatch(changeCopperTransactionValue(parseInt(transactionValue, 10)));
    }
  };
};

class StashForm extends React.Component {

  render() {
    const {
      platinum,
      gold,
      silver,
      copper,
      totalCopper,

      platinumTransactionValue,
      goldTransactionValue,
      silverTransactionValue,
      copperTransactionValue,

      handleWithdrawal,
      handleDeposit,
      handlePlatinumTransactionValueChange,
      handleGoldTransactionValueChange,
      handleSilverTransactionValueChange,
      handleCopperTransactionValueChange
    } = this.props;

    return (
      <form>
        <table>
          <thead>
            <tr>
              <th />
              <th>Amount</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="4">
                <button type="button" onClick={() => handleWithdrawal(platinumTransactionValue, goldTransactionValue, silverTransactionValue, copperTransactionValue)}>Withdrawal</button>
              </td>
              <td>
                <input
                  type="text"
                  value={platinumTransactionValue}
                  onChange={(e) => { handlePlatinumTransactionValueChange(e.target.value); }}
                />
              </td>
              <td rowSpan="4">
                <button type="button" onClick={() => handleDeposit(platinumTransactionValue, goldTransactionValue, silverTransactionValue, copperTransactionValue)}>Deposit</button><br />
              </td>
              <td>Platinum: {platinum}</td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  value={goldTransactionValue}
                  onChange={(e) => { handleGoldTransactionValueChange(e.target.value); }}
                />
              </td>
              <td>Gold: {gold}</td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  value={silverTransactionValue}
                  onChange={(e) => { handleSilverTransactionValueChange(e.target.value); }}
                />
              </td>
              <td>Silver: {silver}</td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  value={copperTransactionValue}
                  onChange={(e) => { handleCopperTransactionValueChange(e.target.value); }}
                />
              </td>
              <td>Copper: {copper}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total Worth: </td>
              <td>{totalCopper}</td>
            </tr>
          </tfoot>
        </table>
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StashForm);
