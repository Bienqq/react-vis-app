import {HIDE_SNACKBAR, SHOW_SNACKBAR, UPDATE_FUNCTION_FORM, UPDATE_PLOTTING_DATA} from "../constants/actionTypes";

export const updatePlottingData = (data) => {
    return {
        type: UPDATE_PLOTTING_DATA,
        payload: {
            data,
        }
    }
};

export const updateFunctionForm = formula => {
    return {
        type: UPDATE_FUNCTION_FORM,
        payload: {
            formula
        }
    }
};

export const showSnackbar = (show, snackbarOptions) => {
    return {
        type: SHOW_SNACKBAR,
        payload: {
            show,
            snackbarOptions
        }
    }
};

export const hideSnackbar = show => {
    return {
        type: HIDE_SNACKBAR,
        payload: {
            show,
        }
    }
};

