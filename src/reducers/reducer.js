import {HIDE_SNACKBAR, SHOW_SNACKBAR, UPDATE_FUNCTION_FORM, UPDATE_PLOTTING_DATA} from '../constants/actionTypes'

const initState = {
    formula: "f(x,y) = ",
    start: -10,
    end: 10,
    step: 0.1,
    showSnackbar: false,
    snackbarOptions: {
        message: ""
    }
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
        case SHOW_SNACKBAR:
            return {
                ...state,
                showSnackbar: true,
                snackbarOptions: payload.snackbarOptions
            };
        case HIDE_SNACKBAR:
            return {
                ...state,
                showSnackbar: false,
            };
        default:
            return state
    }
};

export default reducer