import { createBottomTabNavigator } from "react-navigation";
import CreateEventScreen from "../components/screens/CreateEventScreen";
import messageNav from "../navigation/MessageNav";
import HomeNavigator from "./HomeNavigator";

const TabNavigator = createBottomTabNavigator({
  Home: HomeNavigator,
  "New Event": CreateEventScreen,
  Messages: messageNav
});

export default TabNavigator;
