import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation'
import TabNavigator from './src/navigation/TabNavigator'
import AuthLoadingScreen from './src/components/screens/AuthLoadingScreen'
import AuthNavigator from './src/navigation/AuthNavigator'
import firebase from 'firebase'
import { firebaseConfig } from './config'
import {
  postNewEvent,
  getEventUsers,
  addUserToEvent,
  deleteUserFromEvent
} from './src/db/events'
import { getUserEvents } from './src/db/users'
import { addReview } from './src/db/users'

firebase.initializeApp(firebaseConfig)

const switchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: TabNavigator,
    Auth: AuthNavigator
  },
  {
    initialRouteName: 'AuthLoading'
  }
)

class App extends Component {
  state = {}
  render () {
    const AppContainer = createAppContainer(switchNavigator)
    return <AppContainer />
  }
}

export default App
