import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'
import { login } from '../actions/auth'
class LoginFormContainer extends Component {
    state = { username: '', password: ''}

    onSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state.username, this.state.password)
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className='container'>
                <LoginForm
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    values={this.state}
                    onClick={this.onClick}
                />
                <p>Don't have an account yet? <Link to={'/sign-up'}>Sign up now</Link></p>
            </div>

        )
    }
}

export default connect(null, {login})(LoginFormContainer)