import {
        LOGIN_UPDATE,
        LOGIN_USER, 
        LOGIN_USER_FAIL, 
        LOGIN_USER_SUCCESS
    } from './types';
import  axios from 'axios'
import {Actions} from 'react-native-router-flux';
import jwt_decode from 'jwt-decode'
import { AsyncStorage } from 'react-native'

export const loginUpdate = ({text, props}) => {
    return {
        type: LOGIN_UPDATE,
        payload: {text, props}
    };
};


export const loginUser = (email, password) => {
    console.log("Hey",email, password)
    return (dispatch) => {
        dispatch({ type: LOGIN_USER});
        axios.post(`http://10.0.0.84:8001/login`, {email, password})
        .then((response) => {
            AsyncStorage.setItem('JWT_KEY', response.data.token, (err) => {
                if(err){
                    console.log("Error, brah", err)
                } else {
                    const key = AsyncStorage.getItem('JWT_KEY')
                    console.log("You did it, pal", key)
                    const decoded = jwt_decode(response.data.token)
                    console.log(decoded.user.first_name);
                    dispatch({type: LOGIN_USER_SUCCESS, payload: decoded.user})
                    Actions.main();
            }})
        })
        .catch((err) => {
            dispatch({type: LOGIN_USER_FAIL, payload: err})
        })
    };
}
