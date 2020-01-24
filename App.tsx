import Landing from './components/Landing/Landing';
import TestNagivation from './components/TestNavigation';
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
});

const App = createAppContainer(Navigator);

export default App;
