import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import constants from '../../styles/constats';
import generalStyles from '../../styles/generalStyles';

const landingStyles = StyleSheet.create({
  landing: {
    backgroundColor: colors.yellow,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    // borderColor: 'blue',
    // borderWidth: 2
  },
  playlistButton: {
    borderColor: colors.white,
    borderWidth: constants.borderWidth,
    borderRadius: constants.borderRadius,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
  },
  queryBox: {
    borderBottomColor: colors.white,
    borderBottomWidth: constants.borderWidth,
    flexWrap: 'wrap',
    flexDirection: 'row',
    color: colors.black,
    width: '100%',
    textAlign: 'center',
  },
  playBox: {
    height: '30%'
  },
  playButton: {
    height: '100%',
    resizeMode: 'contain',
  },
  landingContainer: {
    flex: 0.95,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '85%',
    // borderColor: 'red',
    // borderWidth: 2,
  },
  elementMargin: {
    marginBottom: 55,
  }
})

export default landingStyles;