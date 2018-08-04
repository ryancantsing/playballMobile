import {LOGIN_UPDATE, LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS} from '../actions/types';
const INITIAL_STATE = { loginEmail: '', loginPassword: '', error: '', loading: false, user:null}

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch(action.type){
        case LOGIN_UPDATE:
            console.log(action.payload);
            return {...state, [action.payload.prop] : action.payload.text};
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