import React, {PropTypes} from 'react'
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import moment from 'moment'
import {get} from 'lodash'

const dateFormat = 'DD-MM-YYYY'

export default ({event, navigation}) =>
  <TouchableHighlight onPress={() => navigation.navigate('ItemDetails', {event})}>
    <View style={style.item}>
      <Text style={style['item--title']}>{event.title}</Text>

      <View style={{flexDirection: 'row'}}>
        <Text style={style['item--ask']}>¿Cuando?</Text>
        <Text>{`${moment(event.fecha_y_hora_inicio).format(dateFormat)} hasta ${moment(event.fecha_y_hora_fin).format(dateFormat)}`}</Text>
      </View>

      {
        get(event, 'lugares[0].direccion_completa') &&
        <View style={{flexDirection: 'row'}}>
          <Text style={style['item--ask']}>¿Donde?</Text>
          <Text>{get(event, 'lugares[0].direccion_completa')}</Text>
        </View>
      }
    </View>
  </TouchableHighlight>

const style = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 15
  },
  'item--ask': {
    color: 'black',
    fontWeight: 'bold',
    paddingRight: 10
  },
  'item--title': {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
