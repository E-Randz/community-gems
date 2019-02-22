import React, { Component } from 'react'
import { styleSheet, Text, View } from 'react-native'
import { MapView } from 'expo';

const Marker = MapView.Marker

export default class Map extends Component {
  state = {
    region: {
      latitude: 53.480710,
      longitude: -2.234380,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    primary: { 
      name: 'my location', coords: {latitude: 53.480710, longitude: -2.234380} 
    },
    places: [{ 
      name: 'streetclean', coords:{latitude: 63.480710, longitude: -3.234380} 
    },{ 
      name: 'streetpaint', coords:{latitude: 73.480710, longitude: -4.234380}  
    },{ 
      name: 'streetburn', coords: {latitude: 83.480710, longitude: -4.234380}  
    }]
  }


  renderMarkers() {
    return this.state.places.map((place, i) => (
      <Marker key={i} title={place.name} coordinate={place.coords} />
    ))
  }

  render() {
    const { region, primary, places } = this.state;

    return (
      <MapView
        style={styles.container}
        region={region}
        showsUserLocation
        ShowsMyLocationButton
        >
        <Marker key={primary.name} title={primary.name} coordinate={primary.coords} />
        {this.renderMarkers()}
      </MapView>
    )

  }

}

  const styles = {
    container: {
      width: '100%',
      height: '80%'

    }
  }