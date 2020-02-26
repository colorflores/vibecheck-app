import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import constants from '../../styles/constats';

const loginStyles = StyleSheet.create({
  loginContainerOuter: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: colors.black
  },
  loginContainerInner: {
    flex: 1,
    width: '85%',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  loginLogo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 25
  },
  loginText: {
    color: colors.white
  },
  loginButton: {
    borderColor: colors.green,
    borderWidth: constants.borderWidth,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20
  },
  loginButtonInactive: {
    backgroundColor: colors.green,
    color: colors.black,
    borderColor: colors.black,
    borderWidth: constants.borderWidth,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20
  },
});

export default loginStyles;