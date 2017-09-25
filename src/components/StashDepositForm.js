import React from 'react';
import Button from 'material-ui/Button';

import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import {
  deposit,
  changeSourceTransactionValue,
  changePlatinumTransactionValue,
  changeGoldTransactionValue,
  changeSilverTransactionValue,
  changeCopperTransactionValue
} from '../actions/stash';

import StashTransactionValueInput from './shared/StashTransactionValueInput';

const styles = theme => ({
  textField: { marginLeft: theme.spacing.unit * 2, marginRight: theme.spacing.unit * 2 },
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
    handleDeposit: (source, platinum, gold, silver, copper) => {
      const transactionDetails = {
        source,
        platinum,
        gold,
        silver,
        copper
      };

      dispatch(deposit(transactionDetails));
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

const StashDepositForm = ({
  classes,

  sourceTransactionValue,
  platinumTransactionValue,
  goldTransactionValue,
  silverTransactionValue,
  copperTransactionValue,

  handleDeposit,
  handleSourceTransactionValueChange,
  handlePlatinumTransactionValueChange,
  handleGoldTransactionValueChange,
  handleSilverTransactionValueChange,
  handleCopperTransactionValueChange
}) => (

  <form noValidate autoComplete="off">

    <h3>Deposit some loot into your stash below</h3>

    <StashTransactionValueInput value={sourceTransactionValue} label="Source" className={classes.textField} onChangeHandler={handleSourceTransactionValueChange} />
    <StashTransactionValueInput value={platinumTransactionValue} label="Platinum" className={classes.textField} onChangeHandler={handlePlatinumTransactionValueChange} />
    <StashTransactionValueInput value={goldTransactionValue} label="Gold" className={classes.textField} onChangeHandler={handleGoldTransactionValueChange} />
    <StashTransactionValueInput value={silverTransactionValue} label="Silver" className={classes.textField} onChangeHandler={handleSilverTransactionValueChange} />
    <StashTransactionValueInput value={copperTransactionValue} label="Copper" className={classes.textField} onChangeHandler={handleCopperTransactionValueChange} />

    <br />
    <Button color="primary" className={classes.button} onClick={() => handleDeposit(sourceTransactionValue, platinumTransactionValue, goldTransactionValue, silverTransactionValue, copperTransactionValue)}>
      Deposit
    </Button>
  </form>
);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(StashDepositForm));
