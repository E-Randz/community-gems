import { createStackNavigator } from 'react-navigation';
import LogInScreen from '../components/screens/HomeScreen';
import SignUpScreen from '../components/screens/MessageScreen';
import ForgotPasswordScreen from '../components/screens/CreateEventScreen';

const AuthNavigator = createStackNavigator({
  LogIn: LogInScreen,
  SignUp: SignUpScreen,
  ForgotPassword: ForgotPasswordScreen,
})

export default AuthNavigator;

