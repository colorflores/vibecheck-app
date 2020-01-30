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
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  option:{
    padding: 5,
    left: 50,
    height: 50,
    width: 500,  
    bottom: 10,
    borderRadius:300,
    backgroundColor: colors.black
  },
  circle1:{
    padding: 13,
    height: 50,
    width: 50, 
    right: 150, 
    borderRadius:300,
    backgroundColor: colors.yellow
  },
  circle2:{
    padding: 13,
    height: 50,
    width: 50, 
    right: 150, 
    borderRadius:300,
    backgroundColor: colors.blue
  },
  circle3:{
    padding: 13,
    height: 50,
    width: 50,  
    right: 150, 
    borderRadius:300,
    backgroundColor: colors.green
  },
  circle4:{
    padding: 13,
    height: 50,
    width: 50, 
    right: 150, 
    borderRadius:300,
    backgroundColor: colors.white
  },
  circle5:{
    padding: 13,
    height: 50,
    width: 50, 
    right: 150, 
    borderRadius:300,
    backgroundColor: colors.purple
  },
  circle6:{
    padding: 13,
    height: 50,
    width: 50, 
    right: 150, 
    borderRadius:300,
    backgroundColor: colors.orange
  },
  text: {
    fontFamily: 'worksans-regular',
    fontStyle: 'normal',
    fontSize: 25,
    color: colors.white,
    textAlign: 'left'
  },
  menuContainer: {
    backgroundColor: colors.black,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  elementMargin: {
    marginBottom: 15,
  }
})

export default menuStyles;