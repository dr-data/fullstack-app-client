import React from 'react'

export default function TicketItem(props) {
    const { picture, description, price } = props.ticket
    return (
        <div className='ticketItem'>
            <p>We calculated that the risk of this ticket being a fraud is {props.risk}%</p>
            <img src={picture} alt='ticket' />
            <p>sold by <b>{props.author.username}</b></p>
            <p className='itemTitle'>EUR {price}</p>
            <p className='ticketDescription'>{description}</p>
        </div>
    )
}
