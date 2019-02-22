import React, { Component } from "react";
import { View, Alert, Text, ScrollView } from "react-native";
import { ButtonGroup } from "react-native-elements";

import Leaderboard from "react-native-leaderboard";

export default class AvatarAndClickable extends Component {
  state = {
    localData: [
      {
        name: "Liam",
        gems: 72138,
        iconUrl: "https://bootdey.com/img/Content/avatar/avatar6.png"
      },
      {
        name: "Emma",
        gems: 12,
        iconUrl: "https://bootdey.com/img/Content/avatar/avatar6.png"
      },
      {
        name: "Mohamed",
        gems: 244,
        iconUrl: "https://bootdey.com/img/Content/avatar/avatar6.png"
      },
      {
        name: "John",
        gems: 33,
        iconUrl: "https://bootdey.com/img/Content/avatar/avatar6.png"
      },
      {
        name: "Flaviu",
        gems: 20,
        iconUrl: "https://bootdey.com/img/Content/avatar/avatar6.png"
      },
      {
        name: "Yasmin",
        gems: 68,
        iconUrl: "https://bootdey.com/img/Content/avatar/avatar6.png"
      },
      {
        name: "Rob",
        gems: 1,
        iconUrl: "https://bootdey.com/img/Content/avatar/avatar6.png"
      },
      {
        name: "Tom",
        gems: 0,
        iconUrl: "https://bootdey.com/img/Content/avatar/avatar6.png"
      },
      {
        name: "Mand",
        gems: 8,
        iconUrl: "https://bootdey.com/img/Content/avatar/avatar6.png"
      },
      {
        name: "Alex",
        gems: 2,
        iconUrl: "https://bootdey.com/img/Content/avatar/avatar6.png"
      },
      {
        name: "Nat",
        gems: null,
        iconUrl: "https://bootdey.com/img/Content/avatar/avatar6.png"
      }
    ],
    UkData: [
      {
        name: "fferf",
        gems: 728,
        iconUrl: "https://bootdey.com/img/Content/avatar/avatar6.png"
      },
      {
        name: "Emefma",
        gems: 1212,
        iconUrl: "https://bootdey.com/img/Content/avatar/avatar6.png"
      },
      {
        name: "Mohaeewqfmed",
        gems: 23144,
        iconUrl: "https://bootdey.com/img/Content/avatar/avatar6.png"
      },
      {
        name: "Jofeqfhn",
        gems: 3323,
        iconUrl: "https://bootdey.com/img/Content/avatar/avatar6.png"
      },
      {
        name: "ffeefwerf",
        gems: 72348,
        iconUrl: "https://bootdey.com/img/Content/avatar/avatar6.png"
      },
      {
        name: "Emxsefma",
        gems: 12212,
        iconUrl: "https://bootdey.com/img/Content/avatar/avatar6.png"
      },
      {
        name: "Mohaedsewqfmed",
        gems: 2444,
        iconUrl: "https://bootdey.com/img/Content/avatar/avatar6.png"
      },
      {
        name: "Josqfhn",
        gems: 23,
        iconUrl: "https://bootdey.com/img/Content/avatar/avatar6.png"
      },
      {
        name: "kas",
        gems: 7228,
        iconUrl: "https://bootdey.com/img/Content/avatar/avatar6.png"
      },
      {
        name: "don",
        gems: 1212,
        iconUrl: "https://bootdey.com/img/Content/avatar/avatar6.png"
      },
      {
        name: "dave",
        gems: 234,
        iconUrl: "https://bootdey.com/img/Content/avatar/avatar6.png"
      },
      {
        name: "sam",
        gems: 323,
        iconUrl: "https://bootdey.com/img/Content/avatar/avatar6.png"
      },
      {
        name: "jo",
        gems: 20,
        iconUrl: "https://bootdey.com/img/Content/avatar/avatar6.png"
      }
    ],
    filter: 0
  };

  _alert = (title, body) => {
    Alert.alert(title, body, [{ text: "OK", onPress: () => {} }], {
      cancelable: false
    });
  };

  render() {
    const props = {
      labelBy: "name",
      sortBy: "gems",
      data: this.state.filter > 0 ? this.state.localData : this.state.UkData,
      icon: "iconUrl",
      onRowPress: (item, index) => {
        this._alert(item.name + ", " + item.gems + " gems, wow!");
      },
      evenRowColor: "#E0F2F7"
    };

    return (
      <ScrollView>
        <View
          style={{
            paddingTop: 50,
            backgroundColor: "#00BFFF",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "white",
              backgroundColor: "#00BFFF",
              paddingBottom: 10,
              fontFamily: "Futura"
            }}
          >
            Gem Leaderboard 💎
          </Text>
          <ButtonGroup
            onPress={x => {
              this.setState({ filter: x });
            }}
            selectedIndex={this.state.filter}
            buttons={["UK", "Local"]}
            containerStyle={{ height: 30 }}
          />
        </View>
        <Leaderboard {...props} />
      </ScrollView>
    );
  }
}