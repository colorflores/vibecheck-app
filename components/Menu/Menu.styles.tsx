import { StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../styles/colors';
import constants from '../../styles/constats';

// ?The container styles that are commented out are solely for debugging purposes.

const menuStyles = StyleSheet.create({
  dotStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    height: 30,
    resizeMode: 'contain'
  },
  menuHeader: {
    backgroundColor: colors.black,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
    // borderColor: 'yellow',
    // borderWidth: 2
  },
  landing: {
    backgroundColor: colors.yellow,
  },
  menuHeaderItems: {
    flexDirection: 'row', 
    height: 50,
    alignItems: 'center',
    width: '85%',
    // borderColor: 'pink',
    // borderWidth: 2
  },
  body: {
    height: '100%', 
    flexDirection: 'column', 
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    // borderColor: 'red',
    // borderWidth: 2
  },
  option: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    fontFamily: 'worksans-regular',
    fontStyle: 'normal',
    fontSize: 26,
    color: colors.white,
    textAlign: 'center',
    marginLeft: 10
  },
  menuContainer: {
    backgroundColor: colors.black,
    alignItems: 'flex-start',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',
    paddingRight: 30,
    top: 70,
    // borderColor: 'blue',
    // borderWidth: 2
  },
  routeText: {
    fontFamily: 'worksans-light',
    fontStyle: 'normal',
    fontSize: 25,
    color: colors.white,
    textAlign: 'center',
    left: 20,
  },
  rightIcon: { 
    alignItems: 'flex-end', 
    alignContent: 'flex-end', 
    flex: 1 
  },
  elementMargin: {
    marginBottom: 40,
  }
})

export default menuStyles;
