import {
  StyleSheet
} from 'react-native';
import colors from '../../styles/colors';
import constants from '../../styles/constats';

const vibeCheckStyles = StyleSheet.create({
  vibecheckScroll: {
    flex: 1,
    backgroundColor: colors.yellow
  },
  vibecheckContainer: {
    alignContent: 'center',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  vibecheckHeader: {
    width: '85%',
    marginTop: 30,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  bottomLine: {
    width: '40%',
    backgroundColor: colors.white,
    height: 10,
    marginBottom: 30,
    borderRadius: 10,
  },
  queryBox: {
    borderColor: 'transparent',
    borderBottomColor: colors.white,
    borderWidth: constants.borderWidth,
    flexWrap: 'wrap',
    flexDirection: 'row',
    color: colors.black,
    width: '75%',
    textAlign: 'center',
  },
  searchContainer: {
    height: 50,
    width: 50,
    backgroundColor: 'black',
    borderRadius: 10,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 6,
  },
  searchIconContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 4,
  },
  searchIcon: {
    height: '100%',
    resizeMode: 'contain'
  },
});

export default vibeCheckStyles;