import {
    PLAYER_UPDATE,
    CREATE_PLAYER_FAIL, 
    CREATE_PLAYER_SUCCESS, 
    CREATE_PLAYER,
    EDIT_PLAYER,
    EDIT_PLAYER_FAIL,
    EDIT_PLAYER_SUCCESS,
    DELETE_PLAYER,
    DELETE_PLAYER_SUCCESS,
    DELETE_PLAYER_FAIL,
    GET_PLAYER,
    GET_PLAYER_FAIL,
    GET_PLAYER_SUCCESS
    } from '../actions/types'

    const INITIAL_STATE = {
        position: '',
        phoneNumber: '',
        teamPassword:'',
        teamId: '',
        userId: '',
        player: null,
        loading: false
    }

    export default (state = INITIAL_STATE, action) => {
            console.log(action);
        switch(action.type){
            case PLAYER_UPDATE:
                console.log(action.payload);
                return {...state, [action.payload.prop] : action.payload.text};
            case CREATE_PLAYER:
                console.log(action.payload);
                return {...state, loading: true, error: ''};
            case CREATE_PLAYER_SUCCESS:
                console.log(action.payload)
                return {...state, loading: false, error:'', player: action.payload};
            case CREATE_PLAYER_FAIL:
                console.log(action.payload)
                return {...state, loading: false, error:'Error creating player'};
            case EDIT_PLAYER: 
                console.log(action.payload)
                return {...state, loading: true, error: ''};
            case EDIT_PLAYER_SUCCESS:
                return {...state, loading: false, error:'', PLAYER: action.payload};
            case EDIT_PLAYER_FAIL:
                console.log(action.payload)
                return {...state, ...INITIAL_STATE, error: 'error editing PLAYER'}
            case DELETE_PLAYER: 
                console.log(action.payload)
                return {...state, loading: true, error: ''}
            case DELETE_PLAYER_SUCCESS:
                console.log(action.payload)
                return {...state, ...INITIAL_STATE };
            case DELETE_PLAYER_FAIL:
                console.log(action.payload)
                return {...state, ...INITIAL_STATE };
            case GET_PLAYER:
                console.log(action.payload);
                return {...state, loading: true, error: ''}
            case GET_PLAYER_SUCCESS:
                console.log(action.payload);
                return {...state, loading: true, error: '', player: action.payload}
            case GET_PLAYER_FAIL:
                console.log(action.payload);
                return {...state, ...INITIAL_STATE, error: 'Error finding player!'}
            default:
                return {...state, ...INITIAL_STATE};
            }
    }