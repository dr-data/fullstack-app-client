import React from 'react'

export default function TicketList (props) {
    return (
        <div className='TicketList'>
            <ul>
            {props.tickets.map(ticket =>
                <li key={ticket.id}>{ticket.price} EUR {ticket.description}</li>
                )}
            </ul>
        </div>
    )
}
