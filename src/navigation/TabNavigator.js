import { createBottomTabNavigator } from "react-navigation";
import HomeScreen from "../components/screens/HomeScreen";
import MessageScreen from "../components/screens/MessageScreen";
import CreateEventScreen from "../components/screens/CreateEventScreen";
import messageNav from "../navigation/MessageNav";
import profileScreen from "../components/screens/ProfileScreen";
import eventsList from "../components/screens/EventsListScreen";

const TabNavigator = createBottomTabNavigator({
  Home: eventsList,
  "New Event": CreateEventScreen,
  Messages: messageNav
});

export default TabNavigator;
