import React, { Component } from 'react'
import { styleSheet, Text, View } from 'react-native'
import { MapView } from 'expo';

const Marker = MapView.Marker

export default class Map extends Component {

  state = {
    places: { name: 'streetclean' }
  }

  // renderMarkers() {
  //   return this.state.places.map((place, i) => (
  //     <Marker key={i} title={place.name} coordinate={place.coords} />
  //   ))
  // }

  render() {
    const { region } = this.state;

    return (
      <MapView
        style={styles.container}
        region={region}
        showsUserLocation
        ShowsMyLocationButton
        >

        {/* {this.renderMarkers()} */}
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