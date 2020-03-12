import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import cities from './data'


const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

export default function CitiesSelect({ handleTextFieldChange, buttonid}) {
  const classes = useStyles();

  return (
    <Autocomplete
      id = {buttonid}
      style={{ width: 300 }}
      options={cities}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={option => option.city}
      renderOption={option => (
        <React.Fragment>
          {option.city}
        </React.Fragment>
      )}
      renderInput={params => (
        <TextField
          {...params}
          onBlur = {handleTextFieldChange}
          label="Choose a City"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
