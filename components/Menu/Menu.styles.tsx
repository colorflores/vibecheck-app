import { StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../styles/colors';
import constants from '../../styles/constats';

const menuStyles = StyleSheet.create({
  menu: {
    backgroundColor: colors.black,
    flex: 0.1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 20
  },
  dotStyle:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    height: 30,
    resizeMode: 'contain'
  },
  menuActive: {
    backgroundColor: colors.black,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 20,
  },
  landing: {
    backgroundColor: colors.yellow,
  },
  upper: { 
    flexDirection: 'row', 
    height: 50,
    alignItems: 'center',
  },
  upperActive: {
    flexDirection: 'row', 
    height: 50,
    alignItems: 'center',
  },
  body: {
    height: '100%', 
    flexDirection: 'column', 
    alignItems: 'center',
    alignContent: 'center',
    left: 40,
    top: 80
  },
  option: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    position: 'absolute',
  },
  text: {
    fontFamily: 'worksans-regular',
    fontStyle: 'normal',
    fontSize: 25,
    color: colors.white,
    textAlign: 'center',
    left: 20,
  },
  menuContainer: {
    width: '85%',
    backgroundColor: colors.black,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  routeText: {
    fontFamily: 'worksans-light',
    fontStyle: 'normal',
    fontSize: 25,
    color: colors.white,
    textAlign: 'center',
    left: 20,
  },
  elementMargin: {
    marginBottom: 70,
  }
})

export default menuStyles;
