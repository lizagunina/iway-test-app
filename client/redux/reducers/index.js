import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import trips from './trips'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    trips
  })

export default createRootReducer
