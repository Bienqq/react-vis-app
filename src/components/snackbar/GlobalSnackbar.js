import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContentWrapper from './SnackbarContentWrapper';
import {hideSnackbar} from "../../actions/actions";
import {connect} from 'react-redux'

function GlobalSnackbar(props) {

    const onSnackbarCLose = () => {
        props.hideSnackbar(true)
    };

    const {showSnackbar, snackbarOptions} = props;

    return (
        <Snackbar
            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            open={showSnackbar}
            autoHideDuration={5000}
            onClose={onSnackbarCLose}
        >
            <SnackbarContentWrapper
                onClose={onSnackbarCLose}
                message={snackbarOptions.message}
                options={snackbarOptions}
            />
        </Snackbar>
    );
}

const mapStateToProps = ({showSnackbar, snackbarOptions}) => ({showSnackbar, snackbarOptions});

const mapDispatchToProps = dispatch => {
    return {
        hideSnackbar: () => dispatch(hideSnackbar(false)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalSnackbar);