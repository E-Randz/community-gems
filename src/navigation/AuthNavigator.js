import { createStackNavigator } from 'react-navigation';
import LogInScreen from '../components/screens/LogInScreen';
import SignUpScreen from '../components/screens/SignUpScreen';
import ForgotPasswordScreen from '../components/screens/ForgotPasswordScreen';

const AuthNavigator = createStackNavigator({
  LogIn: LogInScreen,
  SignUp: SignUpScreen,
  ForgotPassword: ForgotPasswordScreen,
},
{
  initialRouteName: 'LogIn',
}

)

export default AuthNavigator;

