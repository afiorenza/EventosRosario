import {combineReducers, createStore} from 'redux'

import events from './events'

export default (nav) => createStore(combineReducers({
  events,
  nav
}));
