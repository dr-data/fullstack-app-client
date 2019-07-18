import React from 'react'
import Moment from 'moment'

export default function EventItem(props) {
    const event = props.event
    Moment.locale('it')

    return (
        <div className='eventItem'>
            <img src={event.picture} alt={event.title} />
            <p className='itemTitle'>{event.title}</p>
            <p className='eventDescription'>{event.description}</p>
            <p className='eventDate'>
                Event starts: {Moment(event.startDate).format('d MMM')}
                {event.startDate !== event.endDate && 
                    'Event starts:' + Moment(event.endDate).format('d MMM')}
            </p>
        </div>
    )
}
