import React from 'react'
import {Link } from 'react-router-dom'
import'./TicketList.css'
export default function TicketList (props) {
    
    return (
        <div className='TicketList'>
            <ul>
            {props.tickets.map(ticket =>
                <li key={ticket.ticket.id} className={props.colorAction(ticket.risk)}>
                    <Link to={`/event/${ticket.ticket.eventId}/ticket/${ticket.ticket.id}`}><span>{ticket.ticket.price} EUR</span> <span>{ticket.ticket.description}</span></Link>
                </li>
                )}
            </ul>
        </div>
    )
}
