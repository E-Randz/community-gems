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

  };

  

  renderMarkers() {
    return this.props.events.map(event => {
      return <Marker
        key={event.eventID}
        title={event.name}
        coordinate={{ latitude: event.lat, longitude: event.long }}
      />;
    });
  }

  render() {
    console.log({latitude: this.props.user.lat, longitude: this.props.user.long});
    const { region, primary, places } = this.state;

    return (
      <MapView
        style={styles.container}
        region={region}
        showsUserLocation
        ShowsMyLocationButton
      >
        <Marker
          key={'Home'}
          title={"Home"}
          coordinate={{latitude: this.props.user.lat, longitude: this.props.user.long}}
          pinColor={"blue"}
        />
        {this.renderMarkers()}
      </MapView>
    );
  }
}

const styles = {
  container: {
    width: "100%",
    height: "35%"
  }
};
