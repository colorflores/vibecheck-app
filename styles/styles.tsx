import { StyleSheet } from 'react-native';
import colors from './colors';

const vibeStyles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'stretch',
  },
  landing: {
    backgroundColor: colors.yellow,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center'
  },
  landingContainer: {
    alignItems: 'center',
    flex: 1,
  },
  landingLogo: {
    bottom: '1 rem',
    right: '1 rem',
    height: '0.5 rem'
  }
});

export default vibeStyles;