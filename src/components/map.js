import React, { Component } from "react";
import { styleSheet, Text, View } from "react-native";
import { MapView } from "expo";

const Marker = MapView.Marker;

export default class Map extends Component {
  state = {
    region: {
      latitude: 53.48071,
      longitude: -2.23438,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    primary: {
      name: "my location",
      coords: { latitude: 53.48071, longitude: -2.23438 }
    },
    places: [
      {
        name: "streetclean",
        coords: { latitude: 63.48071, longitude: -3.23438 }
      },
      {
        name: "streetpaint",
        coords: { latitude: 73.48071, longitude: -4.23438 }
      },
      {
        name: "streetburn",
        coords: { latitude: 83.48071, longitude: -4.23438 }
      }
    ]
  };

  renderMarkers() {
    return this.state.places.map((place, i) => (
      <Marker key={i} title={place.name} coordinate={place.coords} />
    ));
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
        <Marker
          key={primary.name}
          title={primary.name}
          coordinate={primary.coords}
        />
        {this.renderMarkers()}
      </MapView>
    );
  }
}

const styles = {
  container: {
    width: "100%",
    height: "40%"
  }
};
