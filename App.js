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
// import postUserbyID from './src/db/users'

firebase.initializeApp(firebaseConfig)

const switchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: TabNavigator,
    Auth: AuthNavigator
  },
  {
    initialRouteName: 'App'
  }
)

class App extends Component {
  // componentDidMount() {
  //   postUserbyID('johnboy', 'john', 'boy', 'tester@tester.com', 23,'johnboy street', 'JB5 7JB', 50 , -10)

  // }

  state = {}
  render () {
    const AppContainer = createAppContainer(switchNavigator)
    return <AppContainer />
  }
}

export default App
