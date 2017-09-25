import React from 'react';
import TextField from 'material-ui/TextField';

const StashTransactionValueInput = (props) => (
  <TextField
    label={props.label}
    className={props.className}
    value={props.value}
    onChange={(e) => { props.onChangeHandler(e.target.value); }}
    margin="normal"
  />
);

export default StashTransactionValueInput;
