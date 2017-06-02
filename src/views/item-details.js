import React, {Component, PropTypes} from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View
} from 'react-native'
import MapView from 'react-native-maps'
import {get, isEmpty} from 'lodash'
import {getGeolocation} from '../services'

const getEvent = navigation => get(navigation, 'state.params.event') || {};

class ItemDetails extends Component {
  constructor (props) {
    super(props)

    this.state = {
      geoLocation: {}
    }
  }

  static navigationOptions = ({navigation}) => ({
    title: getEvent(navigation).title,
  })

  componentDidMount () {
    const {nombre_calle, altura} = getEvent(this.props.navigation).lugares[0];

    getGeolocation(nombre_calle, altura)
      .then(response => {
        if (response.status === 'OK') {
          this.setState({
            geoLocation: response.results[0].geometry.location
          });
        }
      })
  }

  render () {
    const {link, texto, uri_imagen} = getEvent(this.props.navigation);
    const {navigate} = this.props.navigation;

    return (
      <ScrollView style={style['item-details']}>
        <Text style={style['item-details--description']}>{texto}</Text>
        <TouchableNativeFeedback onPress={() => navigate('BrowserView', {link})}>
          <Text>Ir al evento</Text>
        </TouchableNativeFeedback>
        {this.renderMap(this.state.geoLocation)}
      </ScrollView>
    );
  }

  renderMap (geoLocation) {
    let content = null;

    if (!isEmpty(geoLocation)) {
      const {lat, lng} = geoLocation

      content = (
        <MapView
          style={style['item-details--map']}
          initialRegion={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: lat,
              longitude: lng
            }}
          />
        </MapView>
      );
    }

    return content;
  }
}

const style = StyleSheet.create({
  'item-details': {
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15
  },
  'item-details--description': {
    color: 'black',
    fontSize: 20,
    paddingBottom: 30,
    paddingTop: 15
  },
  'item-details--map': {
    alignItems: 'center',
    height: 400,
    justifyContent: 'flex-end',
    width: 400
  }
})

 export default ItemDetails
