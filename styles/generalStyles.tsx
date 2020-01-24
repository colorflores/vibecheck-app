import { StyleSheet } from 'react-native';
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
  text: {
    fontFamily: 'worksans-regular',
    fontStyle: 'normal',
    fontSize: 28,
    color: colors.black,
    textAlign: 'left'
  },
  queryText: {
    fontFamily: 'worksans-regular',
    fontStyle: 'normal',
    fontSize: 28,
    color: colors.black,
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