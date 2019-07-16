import * as request from 'superagent'
import { baseUrl } from "../constants"

export const GET_EVENTS = 'GET_EVENTS'

function getAllEvents(payload) {
    return {
        type: GET_EVENTS,
        payload
    }
}

//fetches an array of all paintings
export function getEvents() {
    const url = `${baseUrl}/events`
    return async function (dispatch) {
        const response = await request(url)
        const { events } = response.body
        dispatch(getAllEvents(events))
    }

}

export const GET_SELECTED_EVENT = 'GET_SELECTED_EVENT'

function getSelectedEvent(event, tickets) {
    return {
        type: GET_SELECTED_EVENT,
        payload : {
            event, tickets 
        }
    }
}

//fetches an array of all paintings
export function getEvent(id) {
    const url = `${baseUrl}/events/${encodeURIComponent(id)}`
    return async function (dispatch) {
        try {
            const response = await request(url)
            const { event } = response.body
            const ticketsResponse = await request(`${baseUrl}/events/${encodeURIComponent(id)}/tickets`)
            const {tickets} = ticketsResponse.body
            dispatch(getSelectedEvent(event, tickets))
        }
        catch (error) {
            console.error(error)
        }

    }
}