import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import {isEmpty} from 'lodash'
import {getEvents} from '../actions'

class Home extends Component {

  constructor (props) {
    super(props)

    this.state = {}
  }

  componentDidMount () {
    this.props.getEvents()
  }

  componentDidUpdate () {
    const {events, navigation} = this.props

    if (!isEmpty(events)) {
      navigation.navigate('EventsList', {events})
    }
  }

  render () {
    const {events} = this.props

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
