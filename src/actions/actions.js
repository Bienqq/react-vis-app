import {UPDATE_PLOTTING_DATA, UPDATE_FUNCTION_FORM} from "../constants/actionTypes";

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
