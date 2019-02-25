import { createBottomTabNavigator } from "react-navigation";
import messageNav from "../navigation/MessageNav";
import HomeNavigator from "./HomeNavigator";
import EventsNavigator from "./EventsNavigator";
import EventsViewOrganiser from "../components/screens/EventViewOrganiser";

const TabNavigator = createBottomTabNavigator({
  Home: HomeNavigator,
  Events: EventsNavigator,
  Messages: messageNav
});

export default TabNavigator;
