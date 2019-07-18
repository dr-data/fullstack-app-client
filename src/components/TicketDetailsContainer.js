import React, { Component } from 'react'

import {connect} from 'react-redux'
import {getTicket, getEvent, getTickets} from '../actions/events'
import TicketItem from './TicketItem';
import Loader from './Loader';
import Comment from './Comment';
import {Route, Link} from 'react-router-dom'
import TicketUpdateFormContainer from './TicketUpdateFormContainer';
import CommentFormContainer from './CommentFormContainer';

class TicketDetailsContainer extends Component {
    componentDidMount(){
        const ticketId = this.props.match.params.ticketId
        const id = this.props.match.params.id
        this.props.getTicket(id, ticketId)
    }

    renderForm (){
        if(this.props.author && this.props.user){
            if(this.props.user === this.props.author.id) {
                return <Route path="/event/:id/ticket/:ticketId" exact component={TicketUpdateFormContainer} />
            }
            else return
        }
        else return
    }
   
    render() {
        return (
            <div className='container'>
                {this.props.error &&
                    <h2>{this.props.error}</h2>
                }
                {(!(this.props.ticket || this.props.comments) && !this.props.error )&&
                    <Loader />
                }
                {this.props.ticket &&
                    <TicketItem ticket={this.props.ticket} author={this.props.author} risk={this.props.risk}/>
                    
                }
              
                {this.renderForm()}
                {this.props.comments &&
                    this.props.comments.map(comment=><Comment comment={comment} key={comment.id}/>)
                }
                {this.props.user && 
                    <Route path="/event/:id/ticket/:ticketId" exact component={CommentFormContainer} />
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
        ticketList: state.events.tickets,
        risk : state.events.risk,
        author: state.events.author,
        error: state.events.error,
        user : state.users.userId,
       
        
    }
}
export default connect(mapStateToProps,{getTicket, getEvent, getTickets})(TicketDetailsContainer)