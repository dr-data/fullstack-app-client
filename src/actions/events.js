import * as request from 'superagent'
import { baseUrl } from "../constants"

export const GET_EVENTS = 'GET_EVENTS'

function getAllEvents(payload) {
    return {
        type: GET_EVENTS,
        payload
    }
}

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


export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
})

export const createEvent = (data) => dispatch => {
  request
    .post(`${baseUrl}/events`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body))
    })
    .catch(console.error)
}


export const EVENT_UPDATED = 'EVENT_UPDATED'

const eventUpdated = event => ({
  type: EVENT_UPDATED,
  event
})

export const updateEvent = (id, data) => dispatch => {
  request
    .put(`${baseUrl}/events/${id}`)
    .send(data)
    .then(response => {
      dispatch(eventUpdated(response.body, data))
    })
}