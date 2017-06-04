import React, {Component} from 'react'
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Text,
  WebView
} from 'react-native'
import {GenericError} from './'

export default class AsyncComponent extends Component {
  constructor (props) {
    super(props);

    this.state = {
      error: false,
      loading: true
    }
  }

  render () {
    const {children, error, loading} = this.props;

    if (loading) {
      return <ActivityIndicator style={style['async-component']} />;
    } else if (error) {
      return <GenericError />;
    } else {
      return <View>{children}</View>;
    }
  }
}

const style = StyleSheet.create({
  'async-component': {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
