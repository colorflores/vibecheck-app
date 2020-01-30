import {
  StyleSheet
} from 'react-native';
import colors from '../../styles/colors';
import constants from '../../styles/constats';

const vibeCheckStyles = StyleSheet.create({
  bottomLine: {
    width: '40%',
    backgroundColor: colors.white,
    height: 10,
    marginBottom: 30,
    borderRadius: 10
  },
  queryBox: {
    borderColor: 'transparent',
    borderBottomColor: colors.white,
    borderWidth: constants.borderWidth,
    flexWrap: 'wrap',
    flexDirection: 'row',
    color: colors.black,
    width: '100%',
    textAlign: 'center',
  },
});

export default vibeCheckStyles;