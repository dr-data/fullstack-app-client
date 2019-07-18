import React from 'react'
import { connect } from 'react-redux'
import { createComment } from '../actions/events'
import Comment from './Comment'
import CommentForm from './CommentForm';
class CommentFormContainer extends React.Component {
  id = this.props.match.params.id
  ticketId = this.props.match.params.ticketId
  state = {
    userId: this.props.userId,
    ticketId: this.ticketId,
    text: '',
    eventId: this.id
  }

  componentDidMount() {
    
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {

    event.preventDefault()
    this.props.createComment(this.state, this.ticketId)
    this.setState({
        userId: this.props.userId,
        ticketId: this.ticketId,
        text: '',
        eventId: this.id
    })
  }

  render() {
    return (
      <div className='container'>
        
        {this.props.newComment &&
            <Comment comment={this.props.newComment} key={this.props.newComment.id}/>
        }
        {this.props.username}
        <CommentForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state} />
      </div>

    )
  }
}
function mapStateToProps(state) {
  return {
    newComment: state.events.comment,
    username: state.users.username,
    userId: state.users.userId
  }
}

export default connect(mapStateToProps, { createComment })(CommentFormContainer)