import React from 'react';
import clsx from 'clsx';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import {makeStyles} from '@material-ui/core/styles';

const useStylesWrapper = makeStyles(theme => ({
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));

function SnackbarContentWrapper(props) {
    const classes = useStylesWrapper();
    const {message, onClose} = props;

    return (
        <SnackbarContent
            className={classes.error}
            message={
                <span id="client-snackbar" className={classes.message}>
                    <ErrorIcon className={clsx(classes.icon, classes.iconVariant)}/>
                    {message}
               </span>
            }
            action={[
                <IconButton key="close" color="inherit" onClick={onClose}>
                    <CloseIcon className={classes.icon}/>
                </IconButton>,
            ]}
        />
    );
}

export default SnackbarContentWrapper;