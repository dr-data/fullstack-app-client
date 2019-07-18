import React, { Component } from 'react'
import { connect } from 'react-redux'
import TicketList from './TicketList'
import EventItem from './EventItem'
import Loader from './Loader'
import { getEvent, getTickets } from '../actions/events'
import { Link } from 'react-router-dom'

class TicketListContainer extends Component {
    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getEvent(id)
        this.props.getTickets(id)
    }
    render() {
        return (

            <div className='container'>
                {!(this.props.event || this.props.tickets) && <Loader />}
                {this.props.event &&
                    <div>
                        <EventItem event={this.props.event} />
                        {this.props.users && <Link to={`/event/${this.props.event.id}/create-ticket`}>Create a ticket</Link>
                        }
                    </div>
                }
                  {this.props.user &&
                    <Link to={`/event/${this.props.match.params.id}/create-ticket`}>Add a ticket</Link>
                }
                {this.props.tickets &&
                    <div>
                        <TicketList tickets={this.props.tickets} />
                    </div>
                }

            </div>
        )
    }
}
const mapSateToProps = (state) => {
    return {
        event: state.events.event,
        tickets: state.events.tickets,
        user: state.users
    }

}
export default connect(mapSateToProps, { getEvent, getTickets })(TicketListContainer)