import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignUpForm from './SignUpForm';
import { signUp } from '../actions/auth'

export class SignUpFormContainer extends Component {
    state = {
        username: '',
        password: '',
        password_confirmation: '',
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.signUp(
            this.state.username,
            this.state.password,
            this.state.password_confirmation
        )
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className='container container-signup'>
                {this.props.messageSignUp &&
                <p className='message'>{this.props.messageSignUp}</p>}
                {!this.props.username &&
                    <SignUpForm
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    values={this.state}
                />
                }
            </div>
        )
    }
}

function mapStateToProps (state) {
    console.log(state)
    return {
        messageSignUp: state.users.message,
        username: state.users.username  
    }
}
export default connect(mapStateToProps, { signUp })(SignUpFormContainer)