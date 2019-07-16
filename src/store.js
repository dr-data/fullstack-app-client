import {createStore, applyMiddleware, compose} from 'redux'
import reduxThunk from 'redux-thunk'
import reducer from './reducers'

const middleware = applyMiddleware(reduxThunk)

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancer(middleware)

export default createStore(reducer, enhancer)