import request from 'superagent'
import { baseUrl } from "../constants"

export const ERROR = 'ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'

const errorAction = (message) => {
  return {
    type: ERROR,
    payload: { message }
  }
}

const loginSuccess = payload => {
  console.log(payload)
  return {
    type: LOGIN_SUCCESS,
    payload
  }
}

export const login = (username, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ username, password })
    .then(response => {
      dispatch(loginSuccess(response.body))
    })
    .catch(error => {
      dispatch(errorAction(error.response.text))
    })
}

const signUpSuccess = (newUser) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: { ...newUser }
  }
}

export const signUp = (username, password, password_confirmation) => dispatch => {

  request
    .post(`${baseUrl}/sign-up`)
    .send({ username, password, password_confirmation })
    .then(response => {
      if (!response.ok) { throw response }
      return dispatch(signUpSuccess(response.body))
    })
    .catch(error => {
      dispatch(errorAction(error.response.text))
    })
}