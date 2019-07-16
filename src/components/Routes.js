import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import {withRouter} from 'react-router'
import { connect } from 'react-redux'
import EventListContainer from './EventListContainer';
import TicketListContainer from './TicketListContainer';
import TicketDetailsContainer from './TicketDetailsContainer';

function Routes(props) {
  return (
    <div>
        <Route path='/' exact component={EventListContainer} />
        <Route path='/event/:id' exact component={TicketListContainer} />
        <Route path='/event/:id/ticket/:ticketId' exact component={TicketDetailsContainer} />
    </div>
  )
}

export default withRouter(connect()(Routes))