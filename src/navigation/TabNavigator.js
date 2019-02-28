import { createBottomTabNavigator } from "react-navigation";
import messageNav from "../navigation/MessageNav";
import HomeNavigator from "./HomeNavigator";
import EventsNavigator from "./EventsNavigator";
import EventsViewOrganiser from "../components/screens/EventViewOrganiser";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      // tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={40} color="#00BFFF" />
      ),
      tabBarOptions: {
        showLabel: false
      }
    }
  },

  Events: {
    screen: EventsNavigator,
    navigationOptions: {
      // tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="list" size={35} color="#00BFFF" />
      ),
      tabBarOptions: {
        showLabel: false
      }
    }
  },
  Messages: {
    screen: messageNav,
    navigationOptions: {
      // tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="envelope" size={35} color="#00BFFF" />
      ),
      tabBarOptions: {
        showLabel: false
      }
    }
  }
});

export default TabNavigator;
