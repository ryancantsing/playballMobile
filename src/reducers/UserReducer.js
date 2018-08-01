import {
    FIRST_NAME_CHANGED, 
    LAST_NAME_CHANGED,
    EMAIL_CHANGED, 
    CREATE_USER_FAIL, 
    CREATE_USER_SUCCESS, 
    CREATE_USER,
    EDIT_USER,
    EDIT_USER_FAIL,
    EDIT_USER_SUCCESS,
    DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    PASSWORD_CHANGED
    } from '../actions/types'

    const INITIAL_STATE = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        error: '',
        user: null,
        loading: false
    }

    export default (state = INITIAL_STATE, action) => {
            console.log(action);
        switch(action.type){
            case FIRST_NAME_CHANGED:
                console.log(action.payload);
                return {...state, first_name: action.payload};
            case LAST_NAME_CHANGED:
                console.log(action.payload);
                return {...state, last_name: action.payload};
            case EMAIL_CHANGED:
                console.log(action.payload);
                return {...state, email: action.payload};
            case PASSWORD_CHANGED:
                console.log(action.payload);
                return {...state, password: action.payload};
            case CREATE_USER:
                console.log(action.payload);
                return {...state, loading: true, error: ''};
            case CREATE_USER_SUCCESS:
                console.log(action.payload)
                return {...state, loading: false, error:'', user: action.payload};
            case CREATE_USER_FAIL:
                console.log(action.payload)
                return {...state, loading: false, error:'Error creating user'};
            case EDIT_USER: 
                console.log(action.payload)
                return {...state, loading: true, error: ''};
            case EDIT_USER_SUCCESS:
                return {...state, loading: false, error:'', user: action.payload};
            case EDIT_USER_FAIL:
                console.log(action.payload)
                return {...state, ...INITIAL_STATE, error: 'error editing user'}
            case DELETE_USER: 
                console.log(action.payload)
                return {...state, loading: true, error: ''}
            case DELETE_USER_SUCCESS:
                console.log(action.payload)
                return {...state, ...INITIAL_STATE };
            case DELETE_USER_FAIL:
                console.log(action.payload)
                return {...state, ...INITIAL_STATE };
        }
    }