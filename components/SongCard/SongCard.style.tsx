import {
  StyleSheet
} from 'react-native';
import colors from '../../styles/colors';
import constants from '../../styles/constats';

const songCardStyles = StyleSheet.create({
  songCardContainer: {
    height: 110,
    flex: 1,
    width: '85%',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 30,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  songTitle: {
    fontFamily: 'worksans-regular',
    fontSize: 16,
    color: colors.black,
  },
  songArtist: {
    fontFamily: 'worksans-regular',
    fontSize: 16,
    color: colors.black,
  },
  songAlbum: {
    fontFamily: 'worksans-light',
    fontSize: 16,
    color: colors.black,
  },
})

export default songCardStyles;