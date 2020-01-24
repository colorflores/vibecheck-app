import { StyleSheet } from 'react-native';
import { loadAsync } from 'expo-font';
import colors from './colors';

const generalStyles = StyleSheet.create({
  title: {
    fontFamily: 'sail',
    fontStyle: 'normal',
    fontSize: 40,
  },
  titleButton: {
    fontFamily: 'sail',
    fontStyle: 'normal',
    fontSize: 30,
    color: colors.white,
  },
  subtitle: {

  },
  text: {

  },
  queryText: {
    fontFamily: 'worksans-light',
    fontStyle: 'normal',
    fontSize: 30,
    color: colors.black,
    width: 400,
    textAlign: 'center'
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