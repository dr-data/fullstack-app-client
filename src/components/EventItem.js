import React from 'react'
import Moment from 'moment'

export default function EventItem(props) {
    const event = props.event
    Moment.locale('it')

    return (
        <div className='eventItem'>
            <div className='eventImg'><img src={event.picture} alt={event.title} /></div>
            <div className='eventDetail'>
            <p className='itemTitle'>{event.title}</p>
            <p className='eventDescription'>{event.description}</p>
            <p className='eventDate'>
                {Moment(event.startDate).format('d MMM')}
                {event.startDate !== event.endDate && 
                    ' - ' + Moment(event.endDate).format('d MMM')}
            </p>
            
            </div>
            <div className='clear'></div>
        </div>
    )
}
