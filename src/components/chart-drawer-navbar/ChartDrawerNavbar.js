import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import {fade, withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import {Function} from 'mdi-material-ui'
import MoreOptions from "./MoreOptions";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {connect} from 'react-redux'
import {updateFunctionForm} from '../../actions/actions';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        alignItems: "center",
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(5),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 180,
            '&:focus': {
                width: 260,
            },
        },
    },
    buttonGroup: {
        margin: 4,
    },
});

class ChartDrawerNavbar extends React.Component {

    state = {
        showMoreOptions: false,
    };

    _handleDrawButton = () => {
        this.props.draw()
    };

    _onInputChange = (event) => {
        this.props.updateFunctionForm(event.target.value)
    };

    _handleShowMoreOptions = () => {
        this.setState({showMoreOptions: !this.state.showMoreOptions})
    };

    render() {
        const {classes, formula} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="relative" className={classes.appBar}>
                    <Toolbar>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SvgIcon>
                                    <Function/>
                                </SvgIcon>
                            </div>
                            <InputBase
                                placeholder="Write function formula"
                                classes={{root: classes.inputRoot, input: classes.inputInput}}
                                value={formula}
                                onChange={this._onInputChange}
                            />

                            <ButtonGroup variant="contained" color="inherit" className={classes.buttonGroup}>
                                <Button variant="contained" color="primary" onClick={this._handleDrawButton}>
                                    Draw
                                </Button>
                                <Button color="primary" size="small" onClick={this._handleShowMoreOptions}>
                                    <ArrowDropDownIcon/>
                                </Button>
                            </ButtonGroup>
                        </div>
                    </Toolbar>
                    <MoreOptions open={this.state.showMoreOptions}/>
                </AppBar>
                <Button variant="outlined" color="primary" href="/graph-drawer">
                    <ArrowBackIcon/> Change app
                </Button>
            </div>
        );
    }
}

ChartDrawerNavbar.propTypes = {
    classes: PropTypes.object.isRequired
};

const componentWithStyles = withStyles(styles)(ChartDrawerNavbar);

const mapStateToProps = ({formula}) => ({formula});

const mapDispatchToProps = dispatch => {
    return {
        updateFunctionForm: formula => dispatch(updateFunctionForm(formula)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(componentWithStyles);