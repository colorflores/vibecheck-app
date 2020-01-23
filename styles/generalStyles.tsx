import { StyleSheet } from 'react-native';
import { loadAsync } from 'expo-font';
import colors from './colors';

loadAsync({
  'sail': require('../assets/fonts/Sail.ttf'),
  'worksans-regular': require('../assets/fonts/WorkSans-Regular.ttf'),
  'worksans-light': require('../assets/fonts/WorkSans-Light.ttf')
});

const generalStyles = StyleSheet.create({
  title: {
    fontFamily: 'sail',
    fontStyle: 'normal',
    fontSize: 40,
  },
  subtitle: {

  },
  text: {

  },
  queryText: {
    fontFamily: 'worksans-light',
    fontStyle: 'normal',
    fontSize: 30,
  },
  landingComponent: {
    marginBottom: 10,
  },
  appContainer: {
    flex: 1,
    alignItems: 'stretch',
  },
});

export default generalStyles;