import React from 'react'
import { connect } from 'react-redux'
import { createTicket, getEvent } from '../actions/events'
import EventItem from './EventItem';
import TicketForm from './TicketForm';
import Loader from './Loader'
import { Link } from 'react-router-dom'
class CreateTicketFormContainer extends React.Component {
  id = this.props.match.params.id
  state = {
    picture: '',
    price: '',
    description: '',
    eventId: this.id
  }

  componentDidMount() {
    this.props.getEvent(this.id)
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {

    event.preventDefault()
    this.props.createTicket(this.state)
    this.setState({
      picture: '',
      price: '',
      description: '',
      eventId: this.id
    })
  }

  render() {
    return (
      <div className='container'>
        {!this.props.event && <Loader />}
        {this.props.event &&
          <div>
            <EventItem event={this.props.event} />
          </div>
        }
        {this.props.newTicket &&
          <h1>Congratulations you successfully created the ticket</h1>
          

        }
        <TicketForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state} />
      </div>

    )
  }
}
function mapStateToProps(state) {
  return {
    newTicket: state.events.ticket,
    event: state.events.event,
  }
}

export default connect(mapStateToProps, { createTicket, getEvent })(CreateTicketFormContainer)