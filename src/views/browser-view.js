import React, {Component} from 'react'
import {
  WebView
} from 'react-native'
import {GenericError} from '../components'

export default class BrowserView extends Component {
  constructor (props) {
    super(props);

    this.state = {
      error: false
    }
  }

  render () {
    const {navigation} = this.props;
    const {error} = this.state;

    if (error) {
      return <GenericError />;
    }

    return (
        <WebView
          source={{uri: navigation.state.params.link}}
          style={{height: '100%', width: '100%'}}
          onError={() => this.setState({error: true})}
        />
    );
  }
}
