import Landing from './components/Landing/Landing';
import TestNagivation from './components/TestNavigation';
import Vibecheck from './components/Vibecheck/Vibecheck';
import Loading from './components/Loading/Loading';
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
  Loading: {screen: Loading}
});

const App = createAppContainer(Navigator);

export default App;
