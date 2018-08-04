
import axios from 'axios'
import { Actions} from 'react-native-router-flux'
import { PLAYER_UPDATE } from './types';


export const playerUpdate = ({text, props}) => {
    return {
        type: PLAYER_UPDATE,
        payload: {text, props}
    };
};
export const getPlayer = ({ id }) => {
    return (dispatch) => {
        dispatch({type: GET_PLAYER});
        axios.get(`http://172.31.99.199:8000/${id}/addPlayer/${team_id}`)
        .then((response) => {
            console.log(response.data.user)
            dispatch({ type: GET_PLAYER_SUCCESS, payload: response.data.user})
        })
        .catch((err) => {
            dispatch({type: GET_PLAYER_FAIL, payload: err})
        });
    };
};

export const createPlayer = ({ id, team_id }) => {
    return (dispatch) => {
        dispatch({type: CREATE_PLAYER});
        axios.post(`http://172.31.99.199:8000/${id}/addPlayer/${team_id}`)
        .then((response) => {
            console.log(response.data)
            dispatch({ type: CREATE_PLAYER_SUCCESS, payload: response.data})
        })
        .catch((err) => {
            dispatch({type: CREATE_PLAYER_FAIL, payload: err})
        });
    };
};
export const editPlayer = ({id}) => {
    return (dispatch) => {
        dispatch({type: EDIT_PLAYER});
        axios.patch(`http://172.31.99.199:8000/${id}/updatePlayer`)
        .then((response) => {
            console.log(response.data);
            dispatch({ type: EDIT_PLAYER_SUCCESS, payload: response.data})
        })
        .catch((err) => {
            dispatch({type: EDIT_PLAYER_FAIL, payload: err})
        })
    };
};
export const deletePlayer = ({id}) => {
    return (dispatch) => {
        dispatch({ type: DELETE_PLAYER});
        axios.delete(`http://172.31.99.199:8000/${id}/deletePlayer`)
        .then((response) => {
            console.log(response.data);
            dispatch({ type: DELETE_PLAYER_SUCCESS, payload: response.data})
        })
        .catch((err) => {
            dispatch({type: DELETE_PLAYER_FAIL, payload: err})
        })
    };
};