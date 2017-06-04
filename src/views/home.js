import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'
import {GenericError} from '../components'
import {isEmpty} from 'lodash'
import {getEvents} from '../actions'

class Home extends Component {

  constructor (props) {
    super(props)

    this.state = {
      error: false
    }
  }

  componentDidMount () {
    this.props.getEvents()
      .catch(() => this.setState({error: true}));
  }

  componentDidUpdate () {
    const {events, navigation} = this.props

    if (!isEmpty(events)) {
      navigation.navigate('EventsList', {events})
    }
  }

  render () {
    const {events} = this.props;
    const {error} = this.state;

    if (error) {
      return <GenericError />
    }

    return (
      <View style={style.container}>
        <Text style={style.title}>Cargando eventos...</Text>
        <ActivityIndicator />
      </View>
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
