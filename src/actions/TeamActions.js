import {
    TEAM_UPDATE,
    CREATE_TEAM_FAIL, 
    CREATE_TEAM_SUCCESS, 
    CREATE_TEAM,
    EDIT_TEAM,
    EDIT_TEAM_FAIL,
    EDIT_TEAM_SUCCESS,
    DELETE_TEAM,
    DELETE_TEAM_SUCCESS,
    DELETE_TEAM_FAIL,
    } from './types'
import axios from 'axios'
import { Actions} from 'react-native-router-flux'


export const teamNameChanged = ({text, props }) => {
    return {
        type: TEAM_UPDATE,
        payload: {props, text}
    };
};

export const getTeam = ({ id }) => {
    return (dispatch) => {
        dispatch({type: GET_TEAM});
        axios.get(`http://10.0.0.84:8001/${id}/getTeam/`)
        .then((response) => {
            console.log(response.data.team)
            dispatch({ type: GET_TEAM_SUCCESS, payload: response.data.team})
        })
        .catch((err) => {
            dispatch({type: GET_TEAM_FAIL, payload: err})
        });
    };
};

export const createTeam = ({ id }) => {
    return (dispatch) => {
        dispatch({type: CREATE_TEAM});
        axios.post(`http://10.0.0.84:8001/${id}/addTeam/`)
        .then((response) => {
            console.log(response.data)
            dispatch({ type: CREATE_TEAM_SUCCESS, payload: response.data})
        })
        .catch((err) => {
            dispatch({type: CREATE_TEAM_FAIL, payload: err})
        });
    };
};
export const editTeam = ({id}) => {
    return (dispatch) => {
        dispatch({type: EDIT_TEAM});
        axios.patch(`http://10.0.0.84:8001/${id}/updateTeam`)
        .then((response) => {
            console.log(response.data);
            dispatch({ type: EDIT_TEAM_SUCCESS, payload: response.data})
        })
        .catch((err) => {
            dispatch({type: EDIT_TEAM_FAIL, payload: err})
        })
    };
};
export const deleteTeam = ({id}) => {
    return (dispatch) => {
        dispatch({ type: DELETE_TEAM});
        axios.delete(`http://10.0.0.84:8001/${id}/deleteTeam`)
        .then((response) => {
            console.log(response.data);
            dispatch({ type: DELETE_TEAM_SUCCESS, payload: response.data})
        })
        .catch((err) => {
            dispatch({type: DELETE_TEAM_FAIL, payload: err})
        })
    };
};