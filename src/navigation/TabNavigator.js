import { createBottomTabNavigator } from "react-navigation";
import messageNav from "../navigation/MessageNav";
import HomeNavigator from "./HomeNavigator";
import EventsNavigator from "./EventsNavigator";

const TabNavigator = createBottomTabNavigator({
  Home: HomeNavigator,
  Events: EventsNavigator,
  Messages: messageNav
});

export default TabNavigator;
