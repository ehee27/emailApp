import { createStore, applyMiddleware } from "redux";
import loggingMiddleware from "redux-logger";
import thunk from 'redux-thunk';
// initial state
// action type
// action creater
// reducer


const initialState = {
  contacts: [],
}

const CREATE_CONTACT = 'CREATE_CONTACT';
const FETCH_CONTACT = 'FETCH_CONTACT';

export const fetchContact = (contact) => {
  return {
    type: FETCH_CONTACT,
    contact
  }
}

export const createContact = (contact) => {
  return {
    type: CREATE_CONTACT,
    contact
  }
} 

export const addContact = (contact) => {
  return async dispatch => {
    const promise = Promise.resolve([contact])
    promise.then(res => {
      dispatch(createContact(res))
    })
  }
}

export const createContactThunk = (contact) => {
  return async dispatch => {
    const contact = await axios
  }
}

const reducer = (state=initialState, action) => {
  switch(action.type){
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: action.contact
      }
      default:
        return state
    }
  }

export default createStore(reducer, applyMiddleware(thunk, loggingMiddleware));