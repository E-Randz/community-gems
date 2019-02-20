import { createBottomTabNavigator } from "react-navigation";
import HomeScreen from "../components/screens/HomeScreen";
import MessageScreen from "../components/screens/MessageScreen";
import CreateEventScreen from "../components/screens/CreateEventScreen";
import messageNav from "../navigation/MessageNav";
import profileScreen from "../components/screens/ProfileScreen";

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  "New Event": CreateEventScreen,
  Messages: messageNav
});

export default TabNavigator;
