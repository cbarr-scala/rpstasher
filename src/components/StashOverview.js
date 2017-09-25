import React from 'react';
import numeral from 'numeraljs';

import { connect } from 'react-redux';

import Avatar from 'material-ui/Avatar';
import { amber, grey, blueGrey, brown } from 'material-ui/colors';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import { withStyles } from 'material-ui/styles';

const styles = () => {
  const avatar = { color: '#000', border: '1px solid', height: 25, width: 25, fontSize: '0.9em', verticalAlign: 'middle', display: 'inline-flex' };

  return {
    platinumAvatar: { ...avatar, backgroundColor: grey[200], borderColor: grey[500] },
    goldAvatar: { ...avatar, backgroundColor: amber[400], borderColor: amber[500] },
    silverAvatar: { ...avatar, backgroundColor: blueGrey[100], borderColor: blueGrey[500] },
    copperAvatar: { ...avatar, backgroundColor: brown[400], borderColor: brown[500], color: '#fff' }
  };
};

const mapStateToProps = state => {
  return {
    platinum: state.stash.platinum,
    gold: state.stash.gold,
    silver: state.stash.silver,
    copper: state.stash.copper
  };
};

function CurrencyOverviewRow(props) {
  return (
    <TableRow>
      <TableCell><Avatar className={props.avatarClassName}>{props.displayName.charAt(0)}</Avatar> {props.displayName}</TableCell>
      <TableCell numeric>{numeral(props.amount).format('0,0')}</TableCell>
    </TableRow>
  );
}

const StashOverview = ({ platinum, gold, silver, copper, classes }) => {
  return (
    <div>
      <h3>Your character&apos;s on-hand loot amounts.</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell numeric>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <CurrencyOverviewRow avatarClassName={classes.platinumAvatar} displayName="Platinum" amount={platinum} />
          <CurrencyOverviewRow avatarClassName={classes.goldAvatar} displayName="Gold" amount={gold} />
          <CurrencyOverviewRow avatarClassName={classes.silverAvatar} displayName="Silver" amount={silver} />
          <CurrencyOverviewRow avatarClassName={classes.copperAvatar} displayName="Copper" amount={copper} />
        </TableBody>
      </Table>
    </div>
  );
};

export default connect(mapStateToProps)(withStyles(styles)(StashOverview));
