import React from 'react';

import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import {
  withdrawal,
  changeSourceTransactionValue,
  changePlatinumTransactionValue,
  changeGoldTransactionValue,
  changeSilverTransactionValue,
  changeCopperTransactionValue
} from '../actions/stash';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2
  },
});

const mapStateToProps = state => {
  return {
    sourceTransactionValue: state.sourceTransactionValue,
    platinumTransactionValue: state.platinumTransactionValue,
    goldTransactionValue: state.goldTransactionValue,
    silverTransactionValue: state.silverTransactionValue,
    copperTransactionValue: state.copperTransactionValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleWithdrawal: (source, platinum, gold, silver, copper) => {
      const transactionDetails = {
        source,
        platinum,
        gold,
        silver,
        copper
      };

      dispatch(withdrawal(transactionDetails));
    },
    handleSourceTransactionValueChange: (transactionValue) => {
      dispatch(changeSourceTransactionValue(transactionValue, 10));
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

class StashDepositForm extends React.Component {
  render() {
    const {
      classes,

      sourceTransactionValue,
      platinumTransactionValue,
      goldTransactionValue,
      silverTransactionValue,
      copperTransactionValue,

      handleWithdrawal,
      handleSourceTransactionValueChange,
      handlePlatinumTransactionValueChange,
      handleGoldTransactionValueChange,
      handleSilverTransactionValueChange,
      handleCopperTransactionValueChange
    } = this.props;

    return (

      <div className="root">
        <form noValidate autoComplete="off">

          <h3>Withdrawal some loot from your stash below</h3>
          <TextField
            id="source"
            label="Reason"
            className={classes.textField}
            value={sourceTransactionValue}
            onChange={(e) => { handleSourceTransactionValueChange(e.target.value); }}
            margin="normal"
          />
          <br />
          <TextField
            id="platinum"
            label="Platinum"
            className={classes.textField}
            value={platinumTransactionValue}
            onChange={(e) => { handlePlatinumTransactionValueChange(e.target.value); }}
            margin="normal"
          />
          <br />
          <TextField
            id="gold"
            label="Gold"
            className={classes.textField}
            value={goldTransactionValue}
            onChange={(e) => { handleGoldTransactionValueChange(e.target.value); }}
            margin="normal"
          />
          <br />
          <TextField
            id="silver"
            label="Silver"
            className={classes.textField}
            value={silverTransactionValue}
            onChange={(e) => { handleSilverTransactionValueChange(e.target.value); }}
            margin="normal"
          />
          <br />
          <TextField
            id="copper"
            label="Copper"
            className={classes.textField}
            value={copperTransactionValue}
            onChange={(e) => { handleCopperTransactionValueChange(e.target.value); }}
            margin="normal"
          />
          <br />
          <Button color="primary" className={classes.button} onClick={() => handleWithdrawal(sourceTransactionValue, platinumTransactionValue, goldTransactionValue, silverTransactionValue, copperTransactionValue)}>
            Withdrawal
          </Button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(StashDepositForm));
