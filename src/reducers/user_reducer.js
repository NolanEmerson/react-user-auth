import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false,
    quote: ''
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.SIGN_UP:
        case types.SIGN_IN:
            return {...state, auth: true}
        case types.SIGN_OUT:
            return {...state, auth: false}
        case types.GET_QUOTE:
            return {...state, quote: action.payload}
        default:
            return state;
    }
}