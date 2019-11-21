import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    typography: {
        padding: theme.spacing(1),
    },
}));

function TemporaryPopover({open, anchorEl}) {
    const classes = useStyles();

    return (
        <Popover
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
        >
            <Typography className={classes.typography}>Copied !</Typography>
        </Popover>
    );
}

export default TemporaryPopover;