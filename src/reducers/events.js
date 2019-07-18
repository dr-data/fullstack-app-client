
import { GET_EVENTS, GET_SELECTED_EVENT, GET_SELECTED_TICKET, GET_ALL_TICKETS, ERROR, EVENT_CREATE_SUCCESS } from '../actions/events'

const initialState = {

}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_EVENTS:
            return { events: action.payload }
        case GET_SELECTED_EVENT:
            return { ...state, ...action.payload }
        case EVENT_CREATE_SUCCESS :
                return {...state, ...action.payload}
        case GET_ALL_TICKETS:
            return { ...state, ...action.payload }
        case GET_SELECTED_TICKET:
            return { ...state, ...action.payload }
        case ERROR:
            return { ...state, ...action.payload }
        default:
            return state
    }
}