import { createBottomTabNavigator } from "react-navigation";
import CreateEventScreen from "../components/screens/CreateEventScreen";
import messageNav from "../navigation/MessageNav";
import eventsList from "../components/screens/EventsListScreen";
import HomeNavigator from "./HomeNavigator";

const TabNavigator = createBottomTabNavigator({
  Home: HomeNavigator,
  Events: eventsList,
  "New Event": CreateEventScreen,
  Messages: messageNav
});

export default TabNavigator;
