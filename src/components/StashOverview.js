import React from 'react';
import { connect } from 'react-redux';
import Divider from 'material-ui/Divider';
import numeral from 'numeraljs';
import { amber, grey, blueGrey, brown } from 'material-ui/colors';

import { withStyles } from 'material-ui/styles';
import List, {
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const styles = theme => ({
  platinumAvatar: { color: '#000', backgroundColor: grey[200], border: '1px solid #ddd', height: 25, width: 25, fontSize: '0.9em' },
  goldAvatar: { color: '#000', backgroundColor: amber[400], border: '1px solid #ddd', height: 25, width: 25, fontSize: '0.9em' },
  silverAvatar: { color: '#000', backgroundColor: blueGrey[100], border: '1px solid #ddd', height: 25, width: 25, fontSize: '0.9em' },
  copperAvatar: { color: '#000', backgroundColor: brown[400], border: '1px solid #ddd', height: 25, width: 25, fontSize: '0.9em' },
  root: { background: theme.palette.background.paper }
});

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
      <div className={classes.root}>
        <h3>Your character&apos;s on-hand loot amounts.</h3>
        <List>
          <ListItem>
            <ListItemIcon><Avatar className={classes.platinumAvatar}>P</Avatar></ListItemIcon>
            <ListItemText secondary="Platinum" />
            <ListItemSecondaryAction><p>{numeral(platinum).format('0,0')}</p></ListItemSecondaryAction>
          </ListItem>
          <Divider light />
          <ListItem>
            <ListItemIcon><Avatar className={classes.goldAvatar}>G</Avatar></ListItemIcon>
            <ListItemText secondary="Gold" />
            <ListItemSecondaryAction><p>{numeral(gold).format('0,0')}</p></ListItemSecondaryAction>
          </ListItem>
          <Divider light />
          <ListItem>
            <ListItemIcon><Avatar className={classes.silverAvatar}>S</Avatar></ListItemIcon>
            <ListItemText secondary="Silver" />
            <ListItemSecondaryAction><p>{numeral(silver).format('0,0')}</p></ListItemSecondaryAction>
          </ListItem>
          <Divider light />
          <ListItem>
            <ListItemIcon><Avatar className={classes.copperAvatar}>C</Avatar></ListItemIcon>
            <ListItemText secondary="Copper" />
            <ListItemSecondaryAction primary="teset"><p>{numeral(copper).format('0,0')}</p></ListItemSecondaryAction>
          </ListItem>
        </List>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withStyles(styles)(StashOverview));
