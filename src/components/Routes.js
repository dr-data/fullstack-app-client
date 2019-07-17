import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import EventListContainer from './EventListContainer';
import TicketListContainer from './TicketListContainer';
import TicketDetailsContainer from './TicketDetailsContainer';
import LoginFormContainer from './LoginFormContainer';
import SignUpFormContainer from './SignUpFormContainer';

function Routes(props) {
  return (
    <div>
      {!props.authenticated &&
        <div>
          <Switch>
            <LoginFormContainer />
            <Route path="/sign-up" exact component={SignUpFormContainer} />
          </Switch>
        </div>
      }
      <Route path='/' exact component={EventListContainer} />
      <Route path='/event/:id' exact component={TicketListContainer} />
      <Route path='/event/:id/ticket/:ticketId' exact component={TicketDetailsContainer} />
    </div>
  )
}

const mapStateToProps = state => ({
  authenticated: !!state.users.token
})

export default withRouter(connect(mapStateToProps)(Routes))