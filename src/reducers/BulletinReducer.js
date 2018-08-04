import {
    BULLETIN_CHANGED, 
    CREATE_BULLETIN, 
    CREATE_BULLETIN_SUCCESS, 
    CREATE_BULLETIN_FAIL, 
    GET_BULLETINS,
    GET_BULLETINS_FAIL,
    GET_BULLETINS_SUCCESS,
    DELETE_BULLETIN,
    DELETE_BULLETIN_FAIL,
    DELETE_BULLETIN_SUCCESS,
    } from '../actions/types';
const INITIAL_STATE = { 
    bulletin: '',
    bulletins: [], 
    loading: false, 
    error: '',
    team_id: ''
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch(action.type){
        case BULLETIN_CHANGED:
            console.log(action.payload);
            return {...state, bulletin: action.payload};
        case CREATE_BULLETIN:
            console.log(action.payload);
            return {...state, loading: true, error: ''};
        case CREATE_BULLETIN_SUCCESS:
            return {...state, loading: false, error: ''};
        case CREATE_BULLETIN_FAIL:
            console.log(action.payload)
            return {...state, ...INITIAL_STATE };
        case GET_BULLETINS:
            console.log(action.payload)
            return {...state, loading: true, error: ''}
        case GET_BULLETINS_SUCCESS:
            console.log(action.payload)
            return {...state, loading: false, bulletins: action.payload}
        case GET_BULLETINS_FAIL: 
            console.log(action.payload)
            return {...state, loading: false, error: 'error finding bulletins'}
        case DELETE_BULLETIN:
            console.log(action.payload)
            return {...state, loading: true }
        case DELETE_BULLETIN_FAIL: 
            console.log(action.payload);
            return {...state, ...INITIAL_STATE }
        case DELETE_BULLETIN_SUCCESS:
            console.log(action.payload)
            return {...state, INITIAL_STATE}
        default: return state;
    };
};