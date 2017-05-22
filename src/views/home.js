import React, {Component} from 'react'
import {
  View,
  Text,
  ListView,
  StyleSheet,
  NativeModules
} from 'react-native';

const {ReactNativeAudioStreaming} = NativeModules;
const items = ['item 1', 'item 2', 'item 3'];

class Home extends Component {

  constructor (props) {
    super(props)

    this.state = {
      itemPressed: 0
    }
  }

  render () {
    console.log('ReactNativeAudioStreaming -----------', NativeModules.ReactNativeAudioStreaming);
    console.log('NativeModules -----------', NativeModules);

    return (
      <View>
        <Text style={styles.header}>Home</Text>
        <ListView
          dataSource={this.getDataSource()}
          renderRow={(item, index) =>
            <Text style={styles.listItem} onPress={() => this.setState({itemPressed: item})}>item</Text>
          }
        />
        <Text style={styles.header}>{`Pressed ${this.state.itemPressed}`}</Text>
      </View>
    )
  }

  getDataSource () {
    return new ListView.DataSource({rowHasChanged: () => undefined}).cloneWithRows(items)
  }
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    padding: 20
  },
  listItem: {
    paddingLeft: 20,
    padding: 10,
    fontSize: 20
  }
})

export default Home;
