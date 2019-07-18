
import { GET_EVENTS,COMMENT_CREATE_SUCCESS, GET_SELECTED_EVENT, GET_SELECTED_TICKET, GET_ALL_TICKETS, ERROR_EVENTS, EVENT_CREATE_SUCCESS, TICKET_CREATE_SUCCESS, TICKET_UPDATE_SUCCESS } from '../actions/events'

const initialState = {

}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_EVENTS:
            return {  ...state, ...action.payload }
        case GET_SELECTED_EVENT:
            return { ...state, ...action.payload }
        case EVENT_CREATE_SUCCESS :
                return {...state, ...action.payload}
        case GET_ALL_TICKETS:
            return { ...state, ...action.payload }
        case GET_SELECTED_TICKET:
            return { ...state, ...action.payload }
        case TICKET_CREATE_SUCCESS: 
            return { ...state, ...action.payload }
        case TICKET_UPDATE_SUCCESS: 
            return { ...state, ...action.payload }
        case COMMENT_CREATE_SUCCESS: 
            return { ...state, ...action.payload }
        case ERROR_EVENTS:
            return { ...state, ...action.payload }
        default:
            return state
    }
}