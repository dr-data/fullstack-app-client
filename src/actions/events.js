import * as request from 'superagent'
import { baseUrl } from "../constants"

export const ERROR_EVENTS = 'ERROR_EVENTS'

const errorAction = (message) => {

    return {
        type: ERROR_EVENTS,
        payload: { message }
    }
}

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
        payload: {
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
            console.log(error)
        }

    }
}

export const GET_ALL_TICKETS = 'GET_ALL_TICKETS'

function getAllTickets(tickets) {
    return {
        type: GET_ALL_TICKETS,
        payload: { tickets }
    }
}

export function getTickets(id) {
    const url = `${baseUrl}/events/${encodeURIComponent(id)}/tickets`
    return async function (dispatch) {
        try {
            const ticketsResponse = await request(url)
            const { tickets } = ticketsResponse.body
            dispatch(getAllTickets(tickets))
        }
        catch (error) {
            return dispatch(errorAction(error.response.text))
        }

    }
}

export const GET_SELECTED_TICKET = 'GET_SELECTED_TICKET'

function getSelectedTicket(payload) {
    return {
        type: GET_SELECTED_TICKET,
        payload
    }
}

export function getTicket(id, ticketId) {
    const url = `${baseUrl}/events/${encodeURIComponent(id)}/tickets/${encodeURIComponent(ticketId)}`
    return async function (dispatch) {
        try {
            const response = await request(url)
            dispatch(getSelectedTicket(response.body))
        }
        catch (error) {
            return dispatch(errorAction(error.response))
        }

    }
}

export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'

const eventCreateSuccess = event => {
    console.log(event)
    return {
        type: EVENT_CREATE_SUCCESS,
        payload: event
    }
}

export const createEvent = (event) => (dispatch, getState) => {
    const jwt = getState().users.token
    const data = {
        title: event.title,
        description: event.description,
        picture: event.picture,
        startDate: event.startDate,
        endDate: event.endDate,
        active: true,
        userId: getState().users.userId
    }
    request
        .post(`${baseUrl}/events`)
        .set('Authorization', `Bearer ${jwt}`)
        .send(data)
        .then(response => {
            dispatch(eventCreateSuccess(response.body))
        })
        .catch(error => {
            console.log(error)
        })
}


export const TICKET_CREATE_SUCCESS = 'TICKET_CREATE_SUCCESS'

const ticketCreateSuccess = ticket => {

    return {
        type: TICKET_CREATE_SUCCESS,
        payload: ticket
    }
}

export const createTicket = (ticket) => (dispatch, getState) => {

    const jwt = getState().users.token
    const data = {
        picture: ticket.picture,
        price: ticket.price,
        description: ticket.description,
        eventId: ticket.eventId,
        userId: getState().users.userId
    }
    request
        .post(`${baseUrl}/events/${ticket.eventId}/tickets`)
        .set('Authorization', `Bearer ${jwt}`)
        .send(data)
        .then(response => {
            dispatch(ticketCreateSuccess(response.body))
        })
        .catch(error => {
            console.log(error)
        })
}


export const TICKET_UPDATE_SUCCESS = 'TICKET_UPDATE_SUCCESS'

const ticketUpdateSuccess = ticket => {

    return {
        type: TICKET_UPDATE_SUCCESS,
        payload: ticket
    }
}

export const updateTicket = (ticket, id, ticketId) => (dispatch, getState) => {

    const jwt = getState().users.token
    const data = {
        picture: ticket.picture,
        price: ticket.price,
        description: ticket.description,
        userId: getState().users.userId
    }
    request
        .put(`${baseUrl}/events/${id}/tickets/${ticketId}`)
        .set('Authorization', `Bearer ${jwt}`)
        .send(data)
        .then(response => {
            dispatch(ticketUpdateSuccess(response.body))
        })
        .catch(error => {
            console.log(error)
        })
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
        .catch(error => {
            dispatch(errorAction(error.response.text))
        })
}


export const COMMENT_CREATE_SUCCESS = 'COMMENT_CREATE_SUCCESS'

const commentCreateSuccess = comment => {
   
    return {
        type: COMMENT_CREATE_SUCCESS,
        payload: comment
    }
}

export const createComment = (comment, ticketId) => (dispatch, getState) => {
    const jwt = getState().users.token
    const data = {
        userId: comment.userId,
        ticketId: comment.ticketId,
        text: comment.text,
        eventId: comment.ticketId
    }
    request
        .post(`${baseUrl}/tickets/${ticketId}/comments`)
        .set('Authorization', `Bearer ${jwt}`)
        .send(data)
        .then(response => {
            dispatch(commentCreateSuccess(response.body))
        })
        .catch(error => {
            console.log(error)
        })
}