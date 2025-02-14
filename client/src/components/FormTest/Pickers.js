import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
  });

function DatePicker(props) {
    const { classes } = props;

    return (
        <form className={classes.container} noValidate>
            <TextField  
                id={props.id}
                label={props.label}
                name={props.name}
                type={props.type}
                defaultValue=""
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={props.onChange}
            />
        </form>
    )
}

DatePicker.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePicker);