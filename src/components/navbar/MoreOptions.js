import React from 'react';
import CustomTextField from "./CustomTextField";
import {SlideDown} from 'react-slidedown';
import {makeStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux'
import {updatePlottingData} from "../../actions/actions";

import 'react-slidedown/lib/slidedown.css'

const useStyles = makeStyles(theme => ({
    formContainer: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));


function MoreOptions({open, start, end, step, updateData}) {
    const classes = useStyles();

    const handleChange = name => event => {
        const value = Number.parseFloat(event.target.value);
        updateData({[name]: Number.isNaN(value) ? "" : value});
    };

    return (
        //component taken from https://github.com/frankwallis/react-slidedown
        <SlideDown closed={!open}>
            <div>
                <form className={classes.formContainer} noValidate autoComplete="off">
                    <CustomTextField
                        id="standard-number"
                        label="Start point"
                        type="number"
                        value={start}
                        onChange={handleChange('start')}
                        margin="normal"
                    />
                    <CustomTextField
                        id="standard-number"
                        label="End point"
                        type="number"
                        value={end}
                        className={classes.textField}
                        onChange={handleChange('end')}
                        margin="normal"
                    />
                    <CustomTextField
                        id="standard-number"
                        label="Step"
                        type="number"
                        value={step}
                        className={classes.textField}
                        onChange={handleChange('step')}
                        margin="normal"
                    />

                </form>
            </div>
        </SlideDown>
    )
}

const mapStateToProps = ({start,end,step}) => ({start, end,step});

const mapDispatchToProps = dispatch => {
    return {
        updateData: data => dispatch(updatePlottingData(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreOptions);