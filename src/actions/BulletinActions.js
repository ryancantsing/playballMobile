import {
    CREATE_BULLETIN_FAIL, 
    CREATE_BULLETIN_SUCCESS, 
    CREATE_BULLETIN,
    DELETE_BULLETIN,
    DELETE_BULLETIN_SUCCESS,
    DELETE_BULLETIN_FAIL,
    GET_BULLETINS,
    GET_BULLETINS_FAIL,
    GET_BULLETINS_SUCCESS
    } from './types'
import axios from 'axios'
import { Actions} from 'react-native-router-flux'


export const BulletinChanged = (text) => {
    return {
        type: BULLETIN_CHANGED,
        payload: text
    };
};

export const getBulletins = ({ id }) => {
    return (dispatch) => {
        dispatch({type: GET_BULLETINS});
        axios.get(`http://172.31.99.199:8000/${id}/getBulletins/`)
        .then((response) => {
            console.log(response.data.bulletin)
            dispatch({ type: GET_BULLETINS_SUCCESS, payload: response.data.bulletin})
        })
        .catch((err) => {
            dispatch({type: GET_BULLETINS_FAIL, payload: err})
        });
    };
};

export const createBulletin = ({ id }) => {
    return (dispatch) => {
        dispatch({type: CREATE_BULLETIN});
        axios.post(`http://172.31.99.199:8000/${id}/createBulletin/`)
        .then((response) => {
            console.log(response.data)
            dispatch({ type: CREATE_BULLETIN_SUCCESS, payload: response.data})
        })
        .catch((err) => {
            dispatch({type: CREATE_BULLETIN_FAIL, payload: err})
        });
    };
};
export const deleteBULLETIN = ({id}) => {
    return (dispatch) => {
        dispatch({ type: DELETE_BULLETIN});
        axios.delete(`http://172.31.99.199:8000/${id}/deleteBULLETIN`)
        .then((response) => {
            console.log(response.data);
            dispatch({ type: DELETE_BULLETIN_SUCCESS, payload: response.data})
        })
        .catch((err) => {
            dispatch({type: DELETE_BULLETIN_FAIL, payload: err})
        })
    };
};