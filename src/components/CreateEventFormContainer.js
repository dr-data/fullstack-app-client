import React from 'react'
import { connect } from 'react-redux'
import { createEvent } from '../actions/events'
import EventForm from './EventForm'
import EventItem from './EventItem';

class CreateEventFormContainer extends React.Component {
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
        {this.props.newEvent &&
          <div>
          <p>Event created with success</p>
          <EventItem event={this.props.newEvent} />
          </div>
        }
        
        <EventForm
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
    
export default connect(mapStateToProps, {createEvent})(CreateEventFormContainer)