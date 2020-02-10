import {
  StyleSheet
} from 'react-native';
import colors from '../../styles/colors';

const songCardHeight = 110;

const songCardStyles = StyleSheet.create({
  songCardContainer: {
    height: songCardHeight,
    flex: 1,
    width: '85%',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 30,
    backgroundColor: 'transparent',
  },
  songTitle: {
    fontFamily: 'worksans-regular',
    fontSize: 17,
    color: colors.black,
  },
  songArtist: {
    fontFamily: 'worksans-regular',
    fontSize: 15,
    color: colors.black,
  },
  songAlbum: {
    fontFamily: 'worksans-light',
    fontSize: 15,
    color: colors.black,
  },
  albumContainer: {
    width: songCardHeight,
    height: songCardHeight,
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden'
  },
  albumImage: {
    height: '100%',
    resizeMode: 'contain'
  },
  songContainerOutter: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10
  },
  songContainerInner: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  division: {
    width: '100%',
    borderTopColor: 'white',
    borderTopWidth: 2,
    marginTop: 4,
    marginBottom: 4
  }
})

export default songCardStyles;