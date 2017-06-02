import * as services from '../services'
import {EVENTS_RECEIVED} from '../reducers/constants'

export const getEvents = dispatch => services.getEvents().then(data => dispatch({
  type: EVENTS_RECEIVED,
  events: data
}))
