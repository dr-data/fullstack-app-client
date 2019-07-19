import React from 'react'
import { connect } from 'react-redux'
import { updateTicket } from '../actions/events'

import TicketUpdateForm from './TicketForm';
class TicketUpdateFormContainer extends React.Component {
  id = this.props.match.params.id
  ticketId = this.props.match.params.ticketId
  state = {
    picture: '',
    price: '',
    description: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {

    event.preventDefault()
    this.props.updateTicket(this.state, this.id, this.ticketId)
    this.setState({
      picture: '',
      price: '',
      description: ''
    })
  }

  render() {
    return (
      <div className='container'>
        
        {this.props.newTicket &&
          <h4>The ticket is updated</h4>
        }
        <TicketUpdateForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state} />
      </div>

    )
  }
}
function mapStateToProps(state) {
  return {
    newTicket: state.events.newTicket
  }
}

export default connect(mapStateToProps, { updateTicket})(TicketUpdateFormContainer)