import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const landingStyles = StyleSheet.create({
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
    justifyContent: 'center',
    width: '100%',
  },
  landingLogo: {
    position: 'absolute', 
    bottom: 40, 
    left: 10, 
    height: 40, 
    resizeMode: 'contain',
  }
})

export default landingStyles;