import React from 'react';
import { connect } from 'react-redux';

import { amber, grey, blueGrey, brown } from 'material-ui/colors';

import { withStyles } from 'material-ui/styles';
import List, {
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction, 
  ListSubheader } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const styles = theme => ({
  platinumAvatar: { color: '#000', backgroundColor: grey[200], border: '1px solid #ddd' },
  goldAvatar: { color: '#000', backgroundColor: amber[400], border: '1px solid #ddd' },
  silverAvatar: { color: '#000', backgroundColor: blueGrey[100], border: '1px solid #ddd'},
  copperAvatar: { color: '#000', backgroundColor: brown[400], border: '1px solid #ddd' },
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

// amber a400 - gold
// platinum 200 - grey
// silver 100 - blueGrey
// copper 400 - brown

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
        <List>
          <ListSubheader>
            Your character&apos;s on-hand monetary amounts.
          </ListSubheader>
          <ListItem>
            <ListItemIcon><Avatar className={classes.platinumAvatar}>P</Avatar></ListItemIcon>
            <ListItemText secondary="Platinum" />
            <ListItemSecondaryAction><p>{platinum}</p></ListItemSecondaryAction>
          </ListItem>

          <ListItem>
            <ListItemIcon><Avatar className={classes.goldAvatar}>G</Avatar></ListItemIcon>
            <ListItemText secondary="Gold" />
            <ListItemSecondaryAction><p>{gold}</p></ListItemSecondaryAction>
          </ListItem>

          <ListItem>
            <ListItemIcon><Avatar className={classes.silverAvatar}>S</Avatar></ListItemIcon>
            <ListItemText secondary="Silver" />
            <ListItemSecondaryAction><p>{silver}</p></ListItemSecondaryAction>
          </ListItem>

          <ListItem>
            <ListItemIcon><Avatar className={classes.copperAvatar}>C</Avatar></ListItemIcon>
            <ListItemText secondary="Copper" />
            <ListItemSecondaryAction primary="teset"><p>{copper}</p></ListItemSecondaryAction>
          </ListItem>
        </List>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withStyles(styles)(StashOverview));
