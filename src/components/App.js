import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';

import AccountBalanceIcon from 'material-ui-icons/AccountBalance';
import HistoryIcon from 'material-ui-icons/History';
import AddCircleIcon from 'material-ui-icons/AddCircle';
import RemoveCircleIcon from 'material-ui-icons/RemoveCircle';

import StashForm from '../components/StashForm';

// account_balance
// history
// add_circle
// remove_circle

export default class App extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <h1>RP Stasher</h1>
        <h2>Wealth management for role playing game characters</h2>
        <Router>
          <Paper>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              fullWidth
              indicatorColor="accent"
              textColor="accent">
              <Tab component={Link} to="/" icon={<AccountBalanceIcon />} label="Stash" />
              <Tab component={Link} to="/deposit" icon={<AddCircleIcon />} label="Deposit" />
              <Tab component={Link} to="/withdrawal" icon={<RemoveCircleIcon />} label="Withdrawal" />
              <Tab component={Link} to="/history" icon={<HistoryIcon />} label="History" />
            </Tabs>

            <Route exact path="/" component={StashForm} />
            <Route exact path="/deposit" component={StashForm} />
            <Route exact path="/withdrawal" component={StashForm} />
            <Route exact path="/history" component={StashForm} />
          </Paper>
        </Router>
      </div>
    );
  }
}
