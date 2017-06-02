import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import get from 'lodash/get'

class EventsList extends Component {

  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    const {navigation} = this.props

    return (
      <View style={style.container}>
        <ScrollView><Text>{JSON.stringify(get(navigation, 'state.params.events'))}</Text></ScrollView>
      </View>
    )
  }
}

const style = StyleSheet.create({

})

export default EventsList
