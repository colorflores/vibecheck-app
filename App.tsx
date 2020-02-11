import Landing from './components/Landing/Landing';
import Profile from './components/Profile/Profile';
import Menu from './components/Menu/Menu';
import Loading from './components/Loading/Loading';
import TestNagivation from './components/TestNavigation';
import Vibecheck from './components/Vibecheck/Vibecheck';
import Login from './components/Login/Login';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { loadAsync } from 'expo-font';

loadAsync({
  'sail': require('./assets/fonts/Sail.ttf'),
  'worksans-regular': require('./assets/fonts/WorkSans-Regular.ttf'),
  'worksans-light': require('./assets/fonts/WorkSans-Light.ttf')
});

const Navigator = createStackNavigator({
  Navigation: {screen: TestNagivation},
  Landing: {screen: Landing},
  Vibecheck: {screen: Vibecheck},
  Login: {screen: Login},
  Menu: {screen: Menu},
  Loading: {screen: Loading},
  Profile: {screen: Profile},
});

const App = createAppContainer(Navigator);

export default App;
