import { StyleSheet } from 'react-native';
import { loadAsync } from 'expo-font';
import colors from './colors';

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