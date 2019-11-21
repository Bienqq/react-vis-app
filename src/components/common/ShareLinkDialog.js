import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LinkIcon from '@material-ui/icons/Link';
import Slide from '@material-ui/core/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ShareLinkDialog({open, handleClose, link}) {

    const copyLink = () => {
        const dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = link;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    };

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >
                <DialogTitle id="alert-dialog-slide-title">{"Sharing link below:"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {link}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                        <Button onClick={copyLink} color="primary">
                            <LinkIcon/> Copy link
                        </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ShareLinkDialog;