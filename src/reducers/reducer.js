import {
    GLOBAL_SNACKBAR,
    UPDATE_FUNCTION_FORM,
    UPDATE_PLOTTING_DATA,
    GLOBAL_LINEAR_PROGRESS
} from '../constants/actionTypes'

const initState = {
    formula: "f(x,y) = ",
    start: -10,
    end: 10,
    step: 0.1,
    showSnackbar: false,
    snackbarOptions: {
        message: ""
    },
    showLinearProgress: false,
};

const reducer = (state = initState, {type, payload}) => {
    switch (type) {
        case UPDATE_FUNCTION_FORM:
            return {
                ...state,
                formula: payload.formula
            };
        case UPDATE_PLOTTING_DATA:
            const propertyToUpdate = Object.keys(payload.data)[0];
            const value = payload.data[propertyToUpdate];
            return {
                ...state,
                [propertyToUpdate]: value
            };
        case GLOBAL_SNACKBAR:
            return {
                ...state,
                showSnackbar: payload.show,
                snackbarOptions: payload.snackbarOptions
            };
        case GLOBAL_LINEAR_PROGRESS:
            return {
                ...state,
                showLinearProgress: payload.show
            };
        default:
            return state
    }
};

export default reducer