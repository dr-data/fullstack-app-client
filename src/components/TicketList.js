import React from 'react'
import {Link } from 'react-router-dom'

export default function TicketList (props) {
    return (
        <div className='TicketList'>
            <ul>
            {props.tickets.map(ticket =>
                <li key={ticket.id}>
                    <Link to={`/event/${ticket.eventId}/ticket/${ticket.id}`}>{ticket.price} EUR {ticket.description}</Link>
                </li>
                )}
            </ul>
        </div>
    )
}
