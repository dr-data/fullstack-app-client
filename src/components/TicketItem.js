import React from 'react'

export default function TicketItem(props) {
    const { picture, description, price, createdAt } = props.ticket
    return (
        <div className='ticketItem'>
            <img src={picture} alt='ticket' />
            <p className='itemTitle'>{price}</p>
            <p className='ticketDescription'>{description}</p>
            <p className='ticketDate'>{createdAt}</p>
        </div>
    )
}
