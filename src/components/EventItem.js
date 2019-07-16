import React from 'react'

export default function EventItem(props) {
    const event = props.event
    console.log(event, 'event')
    return (
        <div className='eventItem'>
            <img src={event.picture} alt={event.title} />
            <p className='itemTitle'>{event.title}</p>
            <p className='eventDescription'>{event.description}</p>
            <p className='eventDate'>{event.startDate}
                {event.startDate !== event.endDate && event.endDate}
            </p>
        </div>
    )
}
