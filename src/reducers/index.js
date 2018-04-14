import {combineReducers} from 'redux';
import userReducer from './user_reducer';
import formReducer from './form_reducer';

export default combineReducers({
    user: userReducer,
    form: formReducer
});