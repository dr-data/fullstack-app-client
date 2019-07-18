import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import EventListContainer from './EventListContainer';
import TicketListContainer from './TicketListContainer';
import TicketDetailsContainer from './TicketDetailsContainer';
import LoginFormContainer from './LoginFormContainer';
import SignUpFormContainer from './SignUpFormContainer';
import CreateEventFormContainer from './CreateEventFormContainer';
import CreateTicketFormContainer from './CreateTicketFormContainer';
import NavBar from './NavBar';

function Routes(props) {
  return (
    <div>
      <div className='navbar'>
        {!props.authenticated && <Switch><LoginFormContainer /></Switch>}
        {props.authenticated && <Switch><NavBar /></Switch>}
      </div>
      <div>
        {!props.authenticated &&
          <div>
            <Switch>
              <Route path="/sign-up" exact component={SignUpFormContainer} />
            </Switch>
          </div>
        }
        {props.authenticated &&
          <Switch>
            <Route path="/create-event" exact component={CreateEventFormContainer} />
            <Route path='/event/:id/create-ticket' exact component={CreateTicketFormContainer} />
          </Switch>
        }
        
          <Switch>
            <Route path='/' exact component={EventListContainer} />
            <Route path='/event/:id' exact component={TicketListContainer} />
            <Route path='/event/:id/ticket/:ticketId' exact component={TicketDetailsContainer} />
          </Switch>
        
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    authenticated: !!state.users.token
  }

}

export default withRouter(connect(mapStateToProps)(Routes))