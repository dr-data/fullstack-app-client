import React, { Component } from 'react'

import {connect} from 'react-redux'
import {getTicket, getEvent, getTickets} from '../actions/events'
import TicketItem from './TicketItem';
import Loader from './Loader';
import Comment from './Comment';

class TicketDetailsContainer extends Component {
    componentDidMount(){
        const ticketId = this.props.match.params.ticketId
        const id = this.props.match.params.id
        this.props.getTicket(id, ticketId)
        this.props.getTickets(id)
    }
   
    render() {
        return (
            <div className='container'>
                {!(this.props.ticket || this.props.comments)&&
                    <Loader />
                }
                <p>We calculated that the risk of this ticket being a fraud is XX%</p>
                {this.props.ticket &&
                    <TicketItem ticket={this.props.ticket} />
                }
                {this.props.comments &&
                    this.props.comments.map(comment=><Comment comment={comment} key={comment.id}/>)
                }
            </div>
        )
    }
}
function mapStateToProps (state) {
    return {
        ticket: state.events.ticket,
        comments: state.events.comments,
        event: state.events.event,
        ticketList: state.events.tickets
    }
}
export default connect(mapStateToProps,{getTicket, getEvent, getTickets})(TicketDetailsContainer)