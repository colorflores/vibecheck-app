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
    headerBackTitle: 'some label'
  }},
  Landing: {screen: Landing},
  Vibecheck: {screen: Vibecheck},
  Login: {screen: Login},
  Menu: {screen: Menu},
  Profile: {screen: Profile},
});

const App = createAppContainer(Navigator);

export default App;
