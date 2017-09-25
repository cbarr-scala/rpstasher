import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeraljs';

import AddCircleIcon from 'material-ui-icons/AddCircle';
import RemoveCircleIcon from 'material-ui-icons/RemoveCircle';

import { withStyles } from 'material-ui/styles';
import { red, green } from 'material-ui/colors';

import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table';

const styles = theme => ({
  withdrawalTransaction: { color: red[200], verticalAlign: 'bottom'},
  depositTransaction: { color: green[200], verticalAlign: 'bottom' }
});

const mapStateToProps = state => {
  return {
    transactions: state.transactions
  };
};

class StashOverview extends React.Component {
  render() {
    const {
      transactions,
      classes
    } = this.props;

    return (

      <div className={classes.root}>
        <h3>Your character&apos;s transaction log.</h3>

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
            {transactions.reverse().map((x, index) => {
              return (
                <TableRow key={index} hover={true}>
                  <TableCell>{x.type === 'Deposit' ? <AddCircleIcon className={classes.depositTransaction} /> : <RemoveCircleIcon className={classes.withdrawalTransaction} />} {x.type}</TableCell>
                  <TableCell>{moment(x.createdOn).calendar()}</TableCell>
                  <TableCell>{x.transactionDetails.source}</TableCell>
                  <TableCell numeric>{numeral(x.transactionDetails.platinum).format('0,0')}</TableCell>
                  <TableCell numeric>{numeral(x.transactionDetails.gold).format('0,0')}</TableCell>
                  <TableCell numeric>{numeral(x.transactionDetails.silver).format('0,0')}</TableCell>
                  <TableCell numeric>{numeral(x.transactionDetails.copper).format('0,0')}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

      </div>
    );
  }
}

export default connect(mapStateToProps)(withStyles(styles)(StashOverview));
