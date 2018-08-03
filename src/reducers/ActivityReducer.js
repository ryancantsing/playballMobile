import {
    ACTIVITY_DATE_CHANGED,
    ACTIVITY_DESCRIPTION_CHANGED,
    ACTIVITY_NAME_CHANGED,
    ACTIVITY_TYPE_CHANGED,
    ACTIVITY_TIME_CHANGED,
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
        activity: null,
        loading: false,
        activities: []
    }

    export default (state = INITIAL_STATE, action) => {
            console.log(action);
        switch(action.type){
            case ACTIVITY_NAME_CHANGED:
                console.log(action.payload);
                return {...state, activity_name: action.payload};
            case ACTIVITY_DESCRIPTION_CHANGED:
                console.log(action.payload);
                return {...state, activity_description: action.payload}
            case ACTIVITY_DATE_CHANGED:
                console.log(action.payload);
                return {...state, activity_date: action.payload};
            case ACTIVITY_TIME_CHANGED:
                console.log(action.payload);
                return {...state, activity_time: action.payload};
            case ACTIVITY_TYPE_CHANGED:
                console.log(action.payload);
                return {...state, activity_type: action.payload};
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