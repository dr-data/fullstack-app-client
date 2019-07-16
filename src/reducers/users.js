import { LOGIN_SUCCESS, SIGNUP_SUCCESS, ERROR } from '../actions/auth'

export default function (state = {}, action) {
    switch (action.type) {
        case ERROR:
            return {...action.payload}
        case SIGNUP_SUCCESS:
            return {...action.payload}
        case LOGIN_SUCCESS:
            return {...action.payload}
        default:
            return state
    }
}

