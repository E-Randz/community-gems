import { createStackNavigator } from "react-navigation";
import HomeScreen from "../components/screens/HomeScreen";
import ProfileScreen from "../components/screens/ProfileScreen";
import LeaderboardScreen from "../components/screens/LeaderboardScreen";

const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    Leaderboard: LeaderboardScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default HomeNavigator;
