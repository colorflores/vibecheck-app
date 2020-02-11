import { Platform, StatusBar } from 'react-native';
import Landing from './components/Landing/Landing';
import Profile from './components/Profile/Profile';
import Menu from './components/Menu/Menu';
import Loading from './components/Loading/Loading';
import Vibecheck from './components/Vibecheck/Vibecheck';
import Login from './components/Login/Login';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const Navigator = createStackNavigator({
  Loading: {screen: Loading, navigationOptions: {
    headerShown: false,
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
  }},
  Landing: {screen: Landing, navigationOptions: {
    headerShown: false,
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
  }},
  Vibecheck: {screen: Vibecheck, navigationOptions: {
    headerShown: false,
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
  }},
  Login: {screen: Login, navigationOptions: {
    headerShown: false,
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
  }},
  Menu: {screen: Menu, navigationOptions: {
    headerShown: false,
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
  }},
  Profile: {screen: Profile, navigationOptions: {
    headerShown: false,
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
  }},
});

const App = createAppContainer(Navigator);

export default App;
