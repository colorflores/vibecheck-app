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
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 20
  },
  upper: {
    flex: 1, 
    flexDirection: 'row', 
    height: 80,
    alignItems: 'center',
    position: 'absolute'
  },
  upperActive: {
    flex: 0.1, 
    flexDirection: 'row', 
    height: 80,
    alignItems: 'center',
  },
  body: {
    flex: 0.9, 
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 40,
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
    left: 20
  },
  menuContainer: {
    width: '85%',
    backgroundColor: colors.black,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  elementMargin: {
    marginBottom: 70,
  }
})

export default menuStyles;