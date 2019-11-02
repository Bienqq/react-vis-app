import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PublishIcon from '@material-ui/icons/Publish';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        alignItems: "center",
    },
});

function GraphDrawerNavbar({classes, fileUploaded}) {

    const _handleUploadFile = event => {
        const fileReader = new FileReader();
        fileReader.readAsBinaryString(event.target.files[0]);
        fileReader.onload = e => fileUploaded(e.target.result);

    };

    return (
        <div className={classes.root}>
            <AppBar position="relative" className={classes.appBar}>
                <Toolbar>
                    <input
                        accept="text/csv"
                        style={{display: 'none'}}
                        id="raised-button-file"
                        multiple
                        type="file"
                        onChange={_handleUploadFile}
                    />
                    <label htmlFor="raised-button-file">
                        <Button variant="contained" component="span" color="primary">
                            <PublishIcon/> Upload
                        </Button>
                    </label>

                </Toolbar>
            </AppBar>
            <Button variant="outlined" color="primary" href="/">
                <ArrowBackIcon/> Change app
            </Button>
        </div>
    );

}

GraphDrawerNavbar.propTypes = {
    classes: PropTypes.object.isRequired
};

const componentWithStyles = withStyles(styles)(GraphDrawerNavbar);

export default componentWithStyles;