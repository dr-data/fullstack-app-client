import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEvents } from '../actions/events'
import Loader from './Loader'
import EventItem from './EventItem';
import { Link } from 'react-router-dom'
class EventListContainer extends Component {
    componentDidMount() {
        this.props.getEvents()
    }
    render() {
        return (
            <div className='container'>
                {!this.props.events && <Loader />}
                {this.props.events &&
                    <ul className='eventList'>
                        {this.props.events
                            .map((event, index) =>
                                <li key={index}>
                                    <Link to={`/event/${event.id}`}>
                                        <EventItem event={event} />
                                    </Link>
                                </li>)
                        }
                    </ul>
                }
            </div>
        )
    }
}
const mapStatetoProps = (state) => {
    return {
        events: state.events.events
    }
}
export default connect(mapStatetoProps, { getEvents })(EventListContainer)
