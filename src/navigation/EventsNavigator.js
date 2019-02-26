import { createStackNavigator } from "react-navigation";
import EventsListScreen from "../components/screens/EventsListScreen";
import CreateEventScreen from "../components/screens/CreateEventScreen";
import EventViewOrganiser from '../components/screens/EventViewOrganiser';

const EventsNavigator = createStackNavigator(
  {
    EventsList: EventsListScreen,
    CreateEvent: CreateEventScreen,
    EventView: EventViewOrganiser,
  },
  {
    initialRouteName: "EventsList"
  }
);

export default EventsNavigator;
