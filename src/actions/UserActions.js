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
    GET_USER,
    GET_USER_FAIL,
    GET_USER_SUCCESS
    } from './types'
import axios from 'axios'
import { Actions } from 'react-native-router-flux';
import {AsyncStorage} from 'react-native'


export const userUpdate = ({props, text}) => {
    return {
        type: USER_UPDATE,
        payload: {props, text}
    };
};

export const getUser = () => {
    return (dispatch) => {
        AsyncStorage.getItem('JWT_KEY', (err, key) => {
            if(err){
                console.log(err, "error finding key!")
            } else{
                dispatch({type: GET_USER});
                axios.post(`http://172.31.99.199:8001/getuser`, {key})
                .then((response) => {
                    console.log(response.data)
                    dispatch({ type: GET_USER_SUCCESS, payload: response.data.user})
                })
                .catch((err) => {
                    console.log(err)
                    dispatch({type: GET_USER_FAIL, payload: err})
                });
            }
        })
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