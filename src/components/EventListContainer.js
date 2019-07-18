import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEvents } from '../actions/events'
import Loader from './Loader'
import EventItem from './EventItem';
import { Link } from 'react-router-dom'
class EventListContainer extends Component {
    componentDidMount() {
        let offset = 0
        this.props.getEvents(offset)
    }
    onClick= ()=>{
        if (this.props.events.length < 9) return 
        return this.props.getEvents(this.props.offset)
    }
    render() {
        return (
            <div className='container'>
                {!this.props.events && <Loader />}
                {this.props.events &&
                <div>
                <button onClick={this.onClick}>next</button>
                    <ul className='eventList'>
                        {this.props.events
                            .map((event, index) =>
                                <li key={index}>
                                    <Link to={`/event/${encodeURIComponent(event.id)}`}>
                                        <EventItem event={event} />
                                    </Link>
                                </li>)
                        }
                    </ul>
                    </div>
                }
            </div>
        )
    }
}
const mapStatetoProps = (state) => {
    return {
        events: state.events.events,
        offset: state.events.offset
    }
}
export default connect(mapStatetoProps, { getEvents })(EventListContainer)
