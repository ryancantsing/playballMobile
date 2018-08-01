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
    DELETE_USER_FAIL
    } from './types'
import axios from 'axios'
import { Actions} from 'react-native-router-flux'


export const firstNameChanged = (text) => {
    return {
        type: FIRST_NAME_CHANGED,
        payload: text
    };
};
export const lastNameChanged = (text) => {
    return {
        type: LAST_NAME_CHANGED,
        payload: text
    };
};
export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};
export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};
export const getUser = ({ id }) => {
    return (dispatch) => {
        dispatch({type: GET_USER});
        axios.get(`http://172.31.99.199:8000/${id}/getuser/`)
        .then((response) => {
            console.log(response.data.USER)
            dispatch({ type: GET_USER_SUCCESS, payload: response.data.USER})
        })
        .catch((err) => {
            dispatch({type: GET_USER_FAIL, payload: err})
        });
    };
};

export const createUser = ({ id }) => {
    return (dispatch) => {
        dispatch({type: CREATE_USER});
        axios.post(`http://172.31.99.199:8000/createuser/`)
        .then((response) => {
            console.log(response.data)
            dispatch({ type: CREATE_USER_SUCCESS, payload: response.data})
        })
        .catch((err) => {
            dispatch({type: CREATE_USER_FAIL, payload: err})
        });
    };
};
export const editUser = ({id}) => {
    return (dispatch) => {
        dispatch({type: EDIT_USER});
        axios.patch(`http://172.31.99.199:8000/${id}/updateUSER`)
        .then((response) => {
            console.log(response.data);
            dispatch({ type: EDIT_USER_SUCCESS, payload: response.data})
        })
        .catch((err) => {
            dispatch({type: EDIT_USER_FAIL, payload: err})
        })
    };
};
export const deleteUser = ({id}) => {
    return (dispatch) => {
        dispatch({ type: DELETE_USER});
        axios.delete(`http://172.31.99.199:8000/${id}/deleteUSER`)
        .then((response) => {
            console.log(response.data);
            dispatch({ type: DELETE_USER_SUCCESS, payload: response.data})
        })
        .catch((err) => {
            dispatch({type: DELETE_USER_FAIL, payload: err})
        })
    };
};