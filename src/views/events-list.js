import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import {ListRow} from '../components'
import get from 'lodash/get'

class EventsList extends Component {

  constructor (props) {
    super(props)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(get(this.props.navigation, 'state.params.events'))
    }
  }

  render () {
    return (
      <View
        style={style.list}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(event) => <ListRow event={event} navigation={this.props.navigation} />}
        />
      </View>
    )
  }
}

const style = StyleSheet.create({
  list: {
    backgroundColor: 'white'
  }
});
export default EventsList
