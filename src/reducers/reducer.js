import {UPDATE_PLOTTING_DATA, UPDATE_FUNCTION_FORM} from '../constants/actionTypes'

const initState = {
    formula: "f(x,y) = ",
    start: 10,
    end: 10,
    step: 0.1,
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
                [propertyToUpdate]:value
            };
        default:
            return state
    }
};

export default reducer