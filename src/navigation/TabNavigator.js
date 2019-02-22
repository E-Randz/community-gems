
import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import CreateEventScreen from "../components/screens/CreateEventScreen";
import messageNav from "../navigation/MessageNav";
import HomeNavigator from "./HomeNavigator";

import { getUserByID } from '../db/users';
import firebase from 'firebase';


import EventsNavigator from "./EventsNavigator";


class TabNavigator extends Component {
  state = { 
    user: null,
  }

  componentDidMount() {
    const userID = firebase.auth().currentUser.uid;
    getUserByID(userID)
      .then((snapshot) => {
        const user = snapshot.val();
        this.setState({
          user
        })
      })
  }

  render() { 
    const TabNavigation = createBottomTabNavigator({
      Home: HomeNavigator,
      Events: EventsNavigator,
      Messages: messageNav
    });
    const TabContainer = createAppContainer(TabNavigation);
    return ( 
      <TabContainer />
    );
  }
}
 
export default TabNavigator;

