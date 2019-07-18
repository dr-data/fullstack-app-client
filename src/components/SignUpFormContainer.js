import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignUpForm from './SignUpForm';
import { signUp } from '../actions/auth'
import { Link } from 'react-router-dom'


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
            <div className='container'>
                {this.props.message &&
                <p className='message'>{this.props.message}</p>}
                {!this.props.username &&
                    <SignUpForm
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    values={this.state}
                />
                }
                    
                {/* <p>Now you can <Link to={'/'}>login</Link></p> */}
                
            </div>
        )
    }
}

function mapStateToProps (state) {
    console.log(state)
    return {
        message: state.users.message,
        username: state.users.username  
    }
}
export default connect(mapStateToProps, { signUp })(SignUpFormContainer)