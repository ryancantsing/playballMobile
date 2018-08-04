import {
        LOGIN_UPDATE,
        LOGIN_USER, 
        LOGIN_USER_FAIL, 
        LOGIN_USER_SUCCESS
    } from './types';
import  axios from 'axios'
import {Actions} from 'react-native-router-flux';

export const loginEmailChanged = ({text, props}) => {
    return {
        type: LOGIN_UPDATE,
        payload: {text, props}
    };
};


export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER});
        axios.get(`http://172.31.99.199:8000/testUser/${email}`)
        .then((response) => {
            console.log(response.data.user)
            dispatch({type: LOGIN_USER_SUCCESS, payload: response.data.user})
            Actions.main();
        })
        .catch((err) => {
            dispatch({type: LOGIN_USER_FAIL, payload: err})
        })
    };
}
const loginUserSuccess = (dispatch, response) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: response
    });
}

const loginUserFail = (dispatch, response) => {
    dispatch({
        type: LOGIN_USER_FAIL,
        payload: response
    })
}