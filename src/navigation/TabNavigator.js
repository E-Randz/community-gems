import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../components/screens/HomeScreen';
import MessageScreen from '../components/screens/MessageScreen';
import CreateEventScreen from '../components/screens/CreateEventScreen';

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  'New Event': CreateEventScreen,
  Messages: MessageScreen,
})

export default TabNavigator;
