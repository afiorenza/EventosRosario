import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'
import {AsyncComponent, GenericError} from '../components'
import EventsList from './events-list'
import {isEmpty} from 'lodash'
import {getEvents} from '../actions'

class Home extends Component {

  constructor (props) {
    super(props)

    this.state = {
      loading: true,
      error: false
    }
  }

  componentDidMount () {
    this.props.getEvents()
      .then(() => this.setState({loading: false}))
      .catch(() => this.setState({loading: false, error: true}));
  }

  render () {
    const {events} = this.props;
    const {error, loading} = this.state;

    return (
      <AsyncComponent
        loadingDescription="Cargando eventos..."
        error={error}
        loading={loading}
      >
        <EventsList {...this.props}/>
      </AsyncComponent>
    )
  }
}

const mapStateToProps = ({events}) => ({events})

const mapDispatchToProps = (dispatch) => ({
  getEvents: () => getEvents(dispatch)
})

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    bottom: 30
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
