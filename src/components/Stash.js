import React from 'react';
import PropTypes from 'prop-types';

const Stash = ({ name, platinum, gold, silver, copper, total }) => (
  <table>
    <thead />
    <tbody>
      <tr>
        <td colSpan="2">Stash for: {name}</td>
      </tr>
      <tr>
        <td>Platinum: </td>
        <td>{platinum}</td>
      </tr>
      <tr>
        <td>Gold: </td>
        <td>{gold}</td>
      </tr>
      <tr>
        <td>Silver: </td>
        <td>{silver}</td>
      </tr>
      <tr>
        <td>Copper: </td>
        <td>{copper}</td>
      </tr>
      <tr>
        <td>Total in Copper: </td>
        <td>{total}</td>
      </tr>
    </tbody>
  </table>
);

Stash.propTypes = {
  name: PropTypes.string.isRequired,
  platinum: PropTypes.number.isRequired,
  gold: PropTypes.number.isRequired,
  silver: PropTypes.number.isRequired,
  copper: PropTypes.number.isRequired
};

export default Stash;
