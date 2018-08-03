import {
    TEAM_NAME_CHANGED,
    LEAGUE_NAME_CHANGED,
    TEAM_PASSWORD_CHANGED,
    CREATE_TEAM_FAIL, 
    CREATE_TEAM_SUCCESS, 
    CREATE_TEAM,
    EDIT_TEAM,
    EDIT_TEAM_FAIL,
    EDIT_TEAM_SUCCESS,
    DELETE_TEAM,
    DELETE_TEAM_SUCCESS,
    DELETE_TEAM_FAIL,
    GET_TEAM,
    GET_TEAM_FAIL,
    GET_TEAM_SUCCESS,
    GET_TEAMS_COACHED,
    GET_TEAMS_COACHED_SUCCESS,
    GET_TEAMS_COACHED_FAIL
    } from '../actions/types'

    const INITIAL_STATE = {
        team_name: '',
        league_name: '',
        team_password: '',
        error: '',
        TEAM: null,
        loading: false,
        teams: []
    }

    export default (state = INITIAL_STATE, action) => {
            console.log(action);
        switch(action.type){
            case TEAM_NAME_CHANGED:
                console.log(action.payload);
                return {...state, position: action.payload};
            case LEAGUE_NAME_CHANGED:
                console.log(action.payload);
                return {...state, league_name: action.payload}
            case TEAM_PASSWORD_CHANGED:
                console.log(action.payload);
                return {...state, team_password: action.payload}
            case CREATE_TEAM:
                console.log(action.payload);
                return {...state, loading: true, error: ''};
            case CREATE_TEAM_SUCCESS:
                console.log(action.payload)
                return {...state, loading: false, error:'', TEAM: action.payload};
            case CREATE_TEAM_FAIL:
                console.log(action.payload)
                return {...state, loading: false, error:'Error creating TEAM'};
            case EDIT_TEAM: 
                console.log(action.payload)
                return {...state, loading: true, error: ''};
            case EDIT_TEAM_SUCCESS:
                return {...state, loading: false, error:'', TEAM: action.payload};
            case EDIT_TEAM_FAIL:
                console.log(action.payload)
                return {...state, ...INITIAL_STATE, error: 'error editing TEAM'}
            case DELETE_TEAM: 
                console.log(action.payload)
                return {...state, loading: true, error: ''}
            case DELETE_TEAM_SUCCESS:
                console.log(action.payload)
                return {...state, ...INITIAL_STATE };
            case DELETE_TEAM_FAIL:
                console.log(action.payload)
                return {...state, ...INITIAL_STATE };
            case GET_TEAM:
                console.log(action.payload);
                return {...state, loading: true, error: ''}
            case GET_TEAM_SUCCESS:
                console.log(action.payload);
                return {...state, loading: false, error: '', team: action.payload}
            case GET_TEAM_FAIL:
                console.log(action.payload);
                return {...state, ...INITIAL_STATE, error: 'Error finding TEAM!'}
            case GET_TEAMS_COACHED:
                console.log(action.payload);
                return {...state, loading: true, error: ''}
            case GET_TEAMS_COACHED_SUCCESS:
                console.log(action.payload);
                return {...state, loading: false, teams: action.payload}
            case GET_TEAMS_COACHED_FAIL:
                console.log(action.payload);
                return {...state, ...INITIAL_STATE}
            }
    }