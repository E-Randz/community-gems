import { createStackNavigator } from "react-navigation";
import EventsListScreen from "../components/screens/EventsListScreen";
import CreateEventScreen from "../components/screens/CreateEventScreen";

const EventsNavigator = createStackNavigator(
  {
    EventsList: EventsListScreen,
    CreateEvent: CreateEventScreen
  },
  {
    initialRouteName: "EventsList"
  }
);

export default EventsNavigator;
