import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import constants from '../../styles/constats';

const profileStyles = StyleSheet.create({
  profile: {
    backgroundColor: colors.black,
    flex: 0.7,
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
  },
  text: {
    fontFamily: 'worksans-regular',
    fontStyle: 'normal',
    fontSize: 25,
    color: colors.white,
    textAlign: 'center'
  },
  middleContainer: {
    flex: 0.3,
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '40%',
    bottom: 150
  },
  lowerContainer: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '40%',
  },
  elementMargin: {
    margin: 25,
  }
})

export default profileStyles;