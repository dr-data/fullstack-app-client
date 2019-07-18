import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Logo extends Component {
    render() {
        return (
            <div className='logo'>
                <Link to={`/`}><h2>Ticket Trade</h2></Link>
            </div>
        )
    }
}
