import React, {Component} from 'react'
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Text,
  WebView
} from 'react-native'
import {GenericError} from '../components'

export default class BrowserView extends Component {
  constructor (props) {
    super(props);

    this.state = {
      error: false,
      loading: true
    }
  }

  render () {
    const {navigation} = this.props;

    if (this.state.loading) {
      return <ActivityIndicator style={style['browser-view_center']} />;
    } else if (this.state.error) {
      return <GenericError />;
    } else {
      return (
        <WebView
          source={{uri: navigation.state.params.link}}
          style={{height: '100%', width: '100%'}}
          onLoadEnd={() => {console.log('terminoooo');this.setState({loading: false})}}
          onError={() => this.setState({error: true, loading: false})}
        />
      );
    }
  }
}

const style = StyleSheet.create({
  'browser-view_center': {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
