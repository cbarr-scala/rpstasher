import React from 'react';
import { connect } from 'react-redux';
import Stash from '../components/Stash';

import { getTotalValue } from '../selectors/stash';

const mapStateToProps = state => {
  return {
    name: state.name,
    platinum: state.platinum,
    gold: state.gold,
    silver: state.silver,
    copper: state.copper,
    total: getTotalValue(state)
  };
};

const StashContainer = connect(mapStateToProps)(Stash);

export default StashContainer;
