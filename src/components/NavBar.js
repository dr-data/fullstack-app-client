import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class NavBar extends Component {
    render() {
        return (
            <div className='container'>
                <ul className='navList'>
                    <li>Hello {this.props.users.username}</li>
                    <li><Link to={'/create-event'}>Create an event</Link></li>
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { users: state.users }
}
export default connect(mapStateToProps, {})(NavBar)