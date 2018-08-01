import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS} from '../actions/types';
const INITIAL_STATE = { email: '', password: '', error: '', loading: false, user:null}

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch(action.type){
        case EMAIL_CHANGED:
            console.log(action.payload);
            return {...state, email: action.payload};
        case PASSWORD_CHANGED:
            console.log(action.payload);
            return {...state, password: action.payload};
        case LOGIN_USER:
            return {...state, loading: true, error: ''};
        case LOGIN_USER_SUCCESS:
            console.log(action.payload)
            return {...state, ...INITIAL_STATE, user: action.payload};
        case LOGIN_USER_FAIL:
            return {...state, error: 'Authentication Failure'};
        default: return state;
    };
};