import React from 'react';
import moment from 'moment';

import AddCircleIcon from 'material-ui-icons/AddCircle';
import RemoveCircleIcon from 'material-ui-icons/RemoveCircle';

import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { red, green } from 'material-ui/colors';

import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table';

import { withStashCurrency } from './shared/formatting';

const styles = ({
  withdrawalTransaction: { color: red[200], verticalAlign: 'bottom' },
  depositTransaction: { color: green[200], verticalAlign: 'bottom' }
});

const mapStateToProps = state => {
  return {
    transactions: state.transactions
  };
};

const StashActivity = ({transactions, classes}) => (
  <div>
    <h3>Your character&apos;s activity log</h3>

    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Type</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Description</TableCell>

          <TableCell numeric>Platinum</TableCell>
          <TableCell numeric>Gold</TableCell>
          <TableCell numeric>Silver</TableCell>
          <TableCell numeric>Copper</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {transactions.reverse().map((x, index) => (
          <TableRow key={index} hover>
            <TableCell>{x.type === 'Deposit' ? <AddCircleIcon className={classes.depositTransaction} /> : <RemoveCircleIcon className={classes.withdrawalTransaction} />} {x.type}</TableCell>
            <TableCell>{moment(x.createdOn).calendar()}</TableCell>
            <TableCell>{x.transactionDetails.source}</TableCell>
            <TableCell numeric>{withStashCurrency(x.transactionDetails.platinum)}</TableCell>
            <TableCell numeric>{withStashCurrency(x.transactionDetails.gold)}</TableCell>
            <TableCell numeric>{withStashCurrency(x.transactionDetails.silver)}</TableCell>
            <TableCell numeric>{withStashCurrency(x.transactionDetails.copper)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default connect(mapStateToProps)(withStyles(styles)(StashActivity));
