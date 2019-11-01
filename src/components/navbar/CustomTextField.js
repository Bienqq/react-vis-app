import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';

// Overriding default styles for TextField
const CustomTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'ghostwhite',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'ghostwhite',
        },
        '& .MuiFormLabel-root': {
            color: 'ghostwhite',
        },
        '& .MuiInputBase-input': {
            color: 'ghostwhite',
        },
        '& .MuiInput-underline': {
            '&:before': {
                borderBottomColor: 'ghostwhite',
            },
            '&:hover:not(.Mui-disabled):before': {
                borderBottom: '1px solid ghostwhite',
            },
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'ghostwhite',
            },
            '&:hover fieldset': {
                borderColor: 'ghostwhite',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'ghostwhite',
            },
        },
    },
})(TextField);

export default CustomTextField;