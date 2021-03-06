import types from '../actions/types';

const DEFAULT_STATE = {
    values: {},
    errors: []
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type){
        case types.FORM_ERROR:
            return {...state, errors: action.error};
        case types.INPUT_CHANGE:
            return {...state, values: {...state.values, [action.name]: action.value}};
        default:
            return state;
    }
}