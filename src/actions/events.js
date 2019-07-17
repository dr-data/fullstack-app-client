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

function getSelectedEvent(event) {
    return {
        type: GET_SELECTED_EVENT,
        payload : {
            event
        }
    }
}

export function getEvent(id) {
    const url = `${baseUrl}/events/${encodeURIComponent(id)}`
    return async function (dispatch) {
        try {
            const response = await request(url)
            const { event } = response.body
           
            dispatch(getSelectedEvent(event))
        }
        catch (error) {
            console.error(error)
        }

    }
}

export const GET_ALL_TICKETS = 'GET_ALL_TICKETS'

function getAllTickets(tickets) {
    return {
        type: GET_ALL_TICKETS,
        payload : { tickets }
    }
}

export function getTickets(id) {
    const url = `${baseUrl}/events/${encodeURIComponent(id)}/tickets`
    return async function (dispatch) {
        try {
            const ticketsResponse = await request(url)
            const {tickets} = ticketsResponse.body
            dispatch(getAllTickets(tickets))
        }
        catch (error) {
            console.error(error)
        }

    }
}

export const GET_SELECTED_TICKET = 'GET_SELECTED_TICKET'

function getSelectedTicket(ticket, comments) {
    return {
        type: GET_SELECTED_TICKET,
        payload : {
            ticket,
            comments
        }
    }
}

export function getTicket(id, ticketId) {
    const url = `${baseUrl}/events/${encodeURIComponent(id)}/tickets/${encodeURIComponent(ticketId)}`
    return async function (dispatch) {
        try {
            const response = await request(url)
            const { ticket } = response.body
            const commentsResponse = await request(`${baseUrl}/tickets/${encodeURIComponent(ticketId)}/comments`)
            const {comments} = commentsResponse.body
            dispatch(getSelectedTicket(ticket, comments))
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