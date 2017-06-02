import React, {Component} from 'react'
import {connect, Provider} from 'react-redux'
import Home from './home'
import EventsList from './events-list'
import store from '../reducers'
import {
  addNavigationHelpers,
  StackNavigator,
} from 'react-navigation';

const AppNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
     title: 'Eventos'
   }
  },
  EventsList: {
    screen: EventsList,
    navigationOptions: {
     title: 'Eventos',
     headerLeft: null
   }
  }
})
const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'));
const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

class App extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav
      })} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default () =>
  <Provider store={store(navReducer)}>
    <AppWithNavigationState />
  </Provider>
