import types from './types';
import axios from 'axios';

export function signUp(cred){
    return (dispatch) => {
        axios.post('http://api.reactprototypes.com/signup', cred).then( resp => {
            console.log('Sign up response: ', resp);

            localStorage.setItem('token', resp.data.token);

            dispatch({
                type: types.SIGN_UP
            });
        });
    }
}

export function signIn(cred){
    return (dispatch) => {
        axios.post('http://api.reactprototypes.com/signin', cred).then( resp => {
            console.log('Sign in response: ', resp);

            localStorage.setItem('token', resp.data.token);

            dispatch({
                type: types.SIGN_IN
            });
        });
    }
}

export function signOut(){
    return {
        type: types.SIGN_OUT
    }

    localStorage.removeItem('token');
}

export function handleInputChange(event){
    const {value, name} = event.target;

    return {
        type: types.INPUT_CHANGE,
        name,
        value
    };
}

export function formError(error){
    return {
        type: types.FORM_ERROR,
        error
    }
}

export function getQuote(){
    return async (dispatch) => {
        const axiosConfig = {
            headers: {
                authorization: localStorage.getItem('token')
            }
        }

        const response = await axios.get('http://api.reactprototypes.com', axiosConfig);

        console.log('Quote response: ', response);

        dispatch({
            type: types.GET_QUOTE,
            payload: response.data.message
        })
    }
}