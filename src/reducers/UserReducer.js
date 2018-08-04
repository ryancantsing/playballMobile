import {
    USER_UPDATE,
    CREATE_USER_FAIL, 
    CREATE_USER_SUCCESS, 
    CREATE_USER,
    EDIT_USER,
    EDIT_USER_FAIL,
    EDIT_USER_SUCCESS,
    DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    } from '../actions/types'

    const INITIAL_STATE = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password:'',
        error: '',
        user: null,
        loading: false
    }

    export default (state = INITIAL_STATE, action) => {
            console.log(action);
        switch(action.type){
            case USER_UPDATE:
                console.log(action.payload);
                return {...state, [action.payload.prop] : action.payload.text};
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