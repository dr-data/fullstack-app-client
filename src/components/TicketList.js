import React from 'react'
import {Link } from 'react-router-dom'
import'./TicketList.css'
export default function TicketList (props) {
    
    return (
        <div className='TicketList'>
            <ul>
            {props.tickets.map(ticket =>
                <li key={ticket.ticket.id} className={props.colorAction(ticket.risk)}>
                    <Link to={`/event/${ticket.ticket.eventId}/ticket/${ticket.ticket.id}`}>{ticket.ticket.price} EUR {ticket.ticket.description}</Link>
                </li>
                )}
            </ul>
        </div>
    )
}
