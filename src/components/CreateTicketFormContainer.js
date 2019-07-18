import React from 'react'
import { connect } from 'react-redux'
import { createTicket } from '../actions/events'
import EventItem from './EventItem';
import TicketForm from './TicketForm';

class CreateTicketFormContainer extends React.Component {
  state = {
    title: '',
    description: '',
    picture: '',
    startDate: '',
    endDate: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.createEvent(this.state)
    this.setState({
      title: '',
      description: '',
      picture: '',
      startDate: '',
      endDate: ''
    })
  }

  render() {
    return (
      <div className='container'>
        
        <TicketForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}/>
      </div>
      
      )
    }
  }
function mapStateToProps (state) {
  return {
          newEvent: state.events.event
      }
    }
    
export default connect(mapStateToProps, {createTicket})(CreateTicketFormContainer)