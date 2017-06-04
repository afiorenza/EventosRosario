import React from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'

export default ({title, detail}) =>
  <View style={style['generic-error']}>
    <Text style={style['generic-error--error-title']}>{title || '¡Lo sentimos!'}</Text>
    <Text style={style['generic-error--error']}>{detail || 'Hubo en error al cargar la pagina'}</Text>
  </View>

const style = StyleSheet.create({
  'generic-error': {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  'generic-error--error-title': {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold'
  },
  'generic-error--error': {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
