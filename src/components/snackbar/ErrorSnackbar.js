import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContentWrapper from './SnackbarContentWrapper';

function ErrorSnackbar({open, onSnackbarClose}) {
    return (
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center'}}
                open={open}
                autoHideDuration={5000}
                onClose={onSnackbarClose}
            >
                <SnackbarContentWrapper
                    onClose={onSnackbarClose}
                    message="Cannot parse function !"
                />
            </Snackbar>
    );
}

export default ErrorSnackbar;