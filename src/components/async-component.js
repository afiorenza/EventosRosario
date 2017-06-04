import React, {Component} from 'react'
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Text,
  WebView
} from 'react-native'
import {GenericError} from './'

export default ({children, error, loading, loadingDescription}) => {

  if (loading) {
    return (
      <View style={style['async-component']}>
        {
          loadingDescription &&
          <Text>{loadingDescription}</Text>
        }
        <ActivityIndicator />
      </View>
    );
  } else if (error) {
    return <GenericError />;
  } else {
    return <View>{children}</View>;
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
