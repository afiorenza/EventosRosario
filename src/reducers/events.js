import {EVENTS_RECEIVED} from './constants'

export default (state={}, action) => {
  const {type, events} = action;

  switch (type) {
    case EVENTS_RECEIVED:
      return events;
    default:
      return state;
  }
}
