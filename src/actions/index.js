import types from './types';

export function changeAuth(isAuth){
    return {
        type: types.CHANGE_AUTH,
        payload: isAuth
    }
}