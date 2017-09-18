import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { deposit, withdrawal } from '../actions/stash';
import { getTotalCopper } from '../selectors/stash';

const mapStateToProps = state => {
  return {
    name: state.name,
    platinumPieces: state.platinumPieces,
    goldPieces: state.goldPieces,
    silverPieces: state.silverPieces,
    copperPieces: state.copperPieces,
    totalCopper: getTotalCopper(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleWithdrawal: () => { dispatch(withdrawal(2, 3, 4, 5)); },
    handleDeposit: () => { dispatch(deposit(2, 3, 4, 5)); }
  };
};

class StashForm extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    platinumPieces: PropTypes.number.isRequired,
    goldPieces: PropTypes.number.isRequired,
    silverPieces: PropTypes.number.isRequired,
    copperPieces: PropTypes.number.isRequired
  };

  render() {
    const {
      name,
      platinumPieces,
      goldPieces,
      silverPieces,
      copperPieces,
      totalCopper,
      handleWithdrawal,
      handleDeposit
    } = this.props;

    return (
      <form>
        <table>
          <thead>
            <tr>
              <th />
              <th>Amount</th>
              <th />
              <th>{name}&apos;s Stash</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="4">
                <button type="button" onClick={handleWithdrawal}>Withdrawal</button>
              </td>
              <td><input type="text" name="platinumTransactionCount" /></td>
              <td rowSpan="4">
                <button type="button" onClick={handleDeposit}>Deposit</button><br />
              </td>
              <td>Platinum: {platinumPieces}</td>
            </tr>
            <tr>
              <td><input type="text" name="goldTransactionCount" /></td>
              <td>Gold: {goldPieces}</td>
            </tr>
            <tr>
              <td><input type="text" name="silverTransactionCount" /></td>
              <td>Silver: {silverPieces}</td>
            </tr>
            <tr>
              <td><input type="text" name="copperTransactionCount" /></td>
              <td>Copper: {copperPieces}</td>
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
