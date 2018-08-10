import {
    ACTIVITY_UPDATE,
    CREATE_EVENT_FAIL, 
    CREATE_EVENT_SUCCESS, 
    CREATE_EVENT,
    EDIT_EVENT,
    EDIT_EVENT_FAIL,
    EDIT_EVENT_SUCCESS,
    DELETE_EVENT,
    DELETE_EVENT_SUCCESS,
    DELETE_EVENT_FAIL,
    } from './types'
import axios from 'axios'
import { Actions} from 'react-native-router-flux';
import { AsyncStorage } from 'react-native'

export const activityUpdate = (prop, text) => {
    return {
        type: ACTIVITY_UPDATE,
        payload: {prop, text}
    };
};

export const getEvent = ({ id }) => {
    return (dispatch) => {
        dispatch({type: GET_EVENT});
        axios.get(`http://172.31.99.199:8000/${id}/getActivity/`)
        .then((response) => {
            console.log(response.data.EVENT)
            dispatch({ type: GET_EVENT_SUCCESS, payload: response.data.EVENT})
        })
        .catch((err) => {
            dispatch({type: GET_EVENT_FAIL, payload: err})
        });
    };
};

export const createEvent = ({ id, activity }) => {
    return (dispatch) => {
        dispatch({type: CREATE_EVENT});
        axios.post(`http://172.31.99.199:8000/${id}/createActivity/`, activity)
        .then((response) => {
            console.log(response.data)
            dispatch({ type: CREATE_EVENT_SUCCESS, payload: response.data})
        })
        .catch((err) => {
            dispatch({type: CREATE_EVENT_FAIL, payload: err})
        });
    };
};
export const editEvent = ({id}) => {
    return (dispatch) => {
        dispatch({type: EDIT_EVENT});
        axios.patch(`http://172.31.99.199:8000/${id}/updateEvent`)
        .then((response) => {
            console.log(response.data);
            dispatch({ type: EDIT_EVENT_SUCCESS, payload: response.data})
        })
        .catch((err) => {
            dispatch({type: EDIT_EVENT_FAIL, payload: err})
        })
    };
};
export const deleteEvent = ({id }) => {
    return (dispatch) => {
        dispatch({ type: DELETE_EVENT});
        axios.delete(`http://172.31.99.199:8000/${id}/deleteEvent`)
        .then((response) => {
            console.log(response.data);
            dispatch({ type: DELETE_EVENT_SUCCESS, payload: response.data})
        })
        .catch((err) => {
            dispatch({type: DELETE_EVENT_FAIL, payload: err})
        })
    };
};