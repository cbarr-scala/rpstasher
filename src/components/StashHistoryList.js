import React from 'react';
import { connect } from 'react-redux';

import { amber, grey, blueGrey, brown } from 'material-ui/colors';

import { withStyles } from 'material-ui/styles';

import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table';

import Avatar from 'material-ui/Avatar';

const styles = theme => ({
  platinumAvatar: { color: '#000', backgroundColor: grey[200], border: '1px solid #ddd' },
  goldAvatar: { color: '#000', backgroundColor: amber[400], border: '1px solid #ddd' },
  silverAvatar: { color: '#000', backgroundColor: blueGrey[100], border: '1px solid #ddd' },
  copperAvatar: { color: '#000', backgroundColor: brown[400], border: '1px solid #ddd' },
  root: { background: theme.palette.background.paper }
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

    const formatDate = (x) => x.toString();

    return (

      <div className={classes.root}>
        <h3>Your character&apos;s transaction log.</h3>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Description</TableCell>

              <TableCell numeric><Avatar className={classes.platinumAvatar}>P</Avatar></TableCell>
              <TableCell numeric><Avatar className={classes.goldAvatar}>G</Avatar></TableCell>
              <TableCell className={classes.right} numeric><Avatar className={classes.silverAvatar}>S</Avatar></TableCell>
              <TableCell numeric><Avatar className={classes.copperAvatar}>C</Avatar></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.reverse().map((x, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{x.type}</TableCell>
                  <TableCell>{formatDate(x.createdOn)}</TableCell>
                  <TableCell>{x.transactionDetails.source}</TableCell>
                  <TableCell numeric>{x.transactionDetails.platinum}</TableCell>
                  <TableCell numeric>{x.transactionDetails.gold}</TableCell>
                  <TableCell numeric>{x.transactionDetails.silver}</TableCell>
                  <TableCell numeric>{x.transactionDetails.copper}</TableCell>
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
