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
    GET_EVENT,
    GET_EVENT_FAIL,
    GET_EVENT_SUCCESS,
    GET_EVENTS,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_FAIL
    } from '../actions/types'

    const INITIAL_STATE = {
        activity_name: '',
        activity_type: '',
        activity_time: '',
        activity_description: '',
        activity_date: '',
        error: '',
        team_id: '',
        activity: null,
        loading: false,
    }

    export default (state = INITIAL_STATE, action) => {
            console.log(action);
        switch(action.type){
            case ACTIVITY_UPDATE:
                console.log(action.payload);
                return {...state, [action.payload.prop] : action.payload.text};
            case CREATE_EVENT:
                console.log(action.payload);
                return {...state, loading: true, error: ''};
            case CREATE_EVENT_SUCCESS:
                console.log(action.payload)
                return {...state, loading: false, error:''};
            case CREATE_EVENT_FAIL:
                console.log(action.payload)
                return {...state, loading: false, error:'Error creating EVENT'};
            case EDIT_EVENT: 
                console.log(action.payload)
                return {...state, loading: true, error: ''};
            case EDIT_EVENT_SUCCESS:
                return {...state, loading: false, error:'', activity: action.payload};
            case EDIT_EVENT_FAIL:
                console.log(action.payload)
                return {...state, ...INITIAL_STATE, error: 'error editing EVENT'}
            case DELETE_EVENT: 
                console.log(action.payload)
                return {...state, loading: true, error: ''}
            case DELETE_EVENT_SUCCESS:
                console.log(action.payload)
                return {...state, ...INITIAL_STATE };
            case DELETE_EVENT_FAIL:
                console.log(action.payload)
                return {...state, ...INITIAL_STATE };
            case GET_EVENT:
                console.log(action.payload);
                return {...state, loading: true, error: ''}
            case GET_EVENT_SUCCESS:
                console.log(action.payload);
                return {...state, loading: false, error: '', activity: action.payload}
            case GET_EVENT_FAIL:
                console.log(action.payload);
                return {...state, ...INITIAL_STATE, error: 'Error finding EVENT!'}
            case GET_EVENTS:
                console.log(action.payload);
                return {...state, loading: true, error: ''}
            case GET_EVENTS_SUCCESS:
                console.log(action.payload);
                return {...state, loading: false, activities: action.payload}
            case GET_EVENTS_FAIL:
                console.log(action.payload);
                return {...state, ...INITIAL_STATE}
            }
    }