// Import the screens
import Main from "../components/Main";
import Chat from "../components/Chat";
// Import React Navigation
import { createStackNavigator } from "react-navigation";
// Create the navigator
const messageNavigator = createStackNavigator(
  {
    Main: { screen: Main },
    Chat: { screen: Chat }
  }
  //   {
  //     initialRouteName: "Main"
  //   }
);
// Export it as the root component
export default messageNavigator;
