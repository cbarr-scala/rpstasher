import React from 'react';
import PropTypes from 'prop-types';

import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { getTotalCopper } from '../selectors/stash';

const mapStateToProps = state => {
  return {
    initialValues: state.stash,
    name: state.stash.name,
    platinumPieces: state.stash.platinumPieces,
    goldPieces: state.stash.goldPieces,
    silverPieces: state.stash.silverPieces,
    copperPieces: state.stash.copperPieces,
    totalCopper: getTotalCopper(state)
  };
};

class StashForm extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    platinumPieces: PropTypes.number.isRequired,
    goldPieces: PropTypes.number.isRequired,
    silverPieces: PropTypes.number.isRequired,
    copperPieces: PropTypes.number.isRequired
  };

  render() {
    const {
      name,
      platinumPieces,
      goldPieces,
      silverPieces,
      copperPieces,
      totalCopper
    } = this.props;

    return (
      <form>
        <table>
          <thead />
          <tbody>
            <tr>
              <td colSpan="2">Stash for: {name}</td>
            </tr>
            <tr>
              <td><label htmlFor="platinumPieces">Platinum</label></td>
              <td><Field name="platinumPieces" component="input" type="text" /></td>
            </tr>
            <tr>
              <td><label htmlFor="goldPieces">Gold</label></td>
              <td><Field name="goldPieces" component="input" type="text" /></td>
            </tr>
            <tr>
              <td><label htmlFor="silverPieces">Silver</label></td>
              <td><Field name="silverPieces" component="input" type="text" /></td>
            </tr>
            <tr>
              <td><label htmlFor="copperPieces">Copper</label></td>
              <td><Field name="copperPieces" component="input" type="text" /></td>
            </tr>
            <tr>
              <td>Total in Copper: </td>
              <td>{totalCopper}</td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}



export default connect(mapStateToProps)(reduxForm({
  form: 'stashForm'
})(StashForm));
