import React from 'react';
import { connect } from 'react-redux';
import Divider from 'material-ui/Divider';
import numeral from 'numeraljs';
import { amber, grey, blueGrey, brown } from 'material-ui/colors';

import { withStyles } from 'material-ui/styles';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table';
import Avatar from 'material-ui/Avatar';

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

class StashOverview extends React.Component {
  render() {
    const {
      platinum,
      gold,
      silver,
      copper,
      classes
    } = this.props;

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
            <TableRow>
              <TableCell><Avatar className={classes.platinumAvatar}>P</Avatar> Platinum</TableCell>
              <TableCell numeric>{numeral(platinum).format('0,0')}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><Avatar className={classes.goldAvatar}>G</Avatar> Gold</TableCell>
              <TableCell numeric>{numeral(gold).format('0,0')}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><Avatar className={classes.silverAvatar}>S</Avatar> Silver</TableCell>
              <TableCell numeric>{numeral(silver).format('0,0')}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><Avatar className={classes.copperAvatar}>C</Avatar> Copper</TableCell>
              <TableCell numeric>{numeral(copper).format('0,0')}</TableCell>
            </TableRow>                        
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withStyles(styles)(StashOverview));
