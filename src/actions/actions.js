import {GLOBAL_SNACKBAR, UPDATE_FUNCTION_FORM, UPDATE_PLOTTING_DATA, GLOBAL_LINEAR_PROGRESS} from "../constants/actionTypes";

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

export const globalSnackbar = (show, snackbarOptions={}) => {
    return {
        type: GLOBAL_SNACKBAR,
        payload: {
            show,
            snackbarOptions
        }
    }
};

export const globalLinearProgress = show => {
    return {
        type: GLOBAL_LINEAR_PROGRESS,
        payload: {
            show,
        }
    }
};