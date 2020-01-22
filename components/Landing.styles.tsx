import { StyleSheet } from 'react-native';
import colors from '../styles/colors';

const landingStyles = StyleSheet.create({
  titleText: {
    // fontFamily: 'S',
    fontStyle: 'normal',
    fontWeight: 'normal',
    marginBottom: 40,
  },
  landing: {
    backgroundColor: colors.yellow,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
  },
  landingContainer: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  landingLogo: {
    bottom: '1 rem',
    right: '1 rem',
    height: '0.5 rem'
  }
})

export default landingStyles;