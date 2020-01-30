import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import constants from '../../styles/constats';

const profileStyles = StyleSheet.create({
  profile: {
    backgroundColor: colors.black,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
  },
  text: {
    fontFamily: 'worksans-regular',
    fontStyle: 'normal',
    fontSize: 28,
    color: colors.white,
    textAlign: 'left'
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  elementMargin: {
    marginBottom: 60,
  }
})

export default profileStyles;