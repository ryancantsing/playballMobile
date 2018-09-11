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
        payload: {text, props}
    };
};

export const getUser = () => {
    return (dispatch) => {
        AsyncStorage.getItem('JWT_KEY', (err, key) => {
            if(err){
                console.log(err, "error finding key!")
            } else{
                dispatch({type: GET_USER});
                axios.post(`http://10.0.0.84:8001/getuser`, {key})
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

export const createUser = (user) => {
    return (dispatch) => {
        dispatch({type: CREATE_USER});
        axios.post(`http://10.0.0.84:8001/createuser/`, user)
        .then((response) => {
            console.log(response.data)
            dispatch({ type: CREATE_USER_SUCCESS, payload: response.data})
            Actions.main();
        })
        .catch((err) => {
            dispatch({type: CREATE_USER_FAIL, payload: err})
        });
    };
};
export const editUser = (user) => {
    AsyncStorage.getItem('JWT_KEY', (err, key) => {
        if(err){
            console.log(err, 'Error finding key')
        } else {
            return (dispatch) => {
                dispatch({type: EDIT_USER});
                axios.patch(`http://10.0.0.84:8001/updateUSER`, user, key)
                .then((response) => {
                    console.log(response.data);
                    dispatch({ type: EDIT_USER_SUCCESS, payload: response.data})
                })
                .catch((err) => {
                    dispatch({type: EDIT_USER_FAIL, payload: err})
                })
            }
        };
    })
};
export const deleteUser = ({id}) => {
    return (dispatch) => {
        dispatch({ type: DELETE_USER});
        axios.delete(`http://10.0.0.84:8001/${id}/deleteUSER`)
        .then((response) => {
            console.log(response.data);
            dispatch({ type: DELETE_USER_SUCCESS, payload: response.data})
        })
        .catch((err) => {
            dispatch({type: DELETE_USER_FAIL, payload: err})
        })
    };
};