export const getAlbumArt = async (geniusID) => {
  // ?Itunes API will come back to it
  // return await fetch(`https://itunes.apple.com/search?term=${album.replace(/\s/g, '+').replace(/\&/g, '+')}+${artist.replace(/\s/g, '+').replace(/\&/g, '+')}&limit=1&entity=album`, {
  //   method: 'GET',
  // }).then(async (res) => {
  //   const result = await res.json();
    
  //   if (result.results) {
  //     return result.artworkUrl100.replace('100x100bb', '400x400bb');
  //   } else {
  //     return null;
  //   }
  // });

  return await fetch(`https://genius.com/api${geniusID}`, {
    method: 'GET',
  }).then(async res => {
    const result = await res.json();

    if (result.response) {
      return result.response.song.header_image_url;
    } else {
      return null;
    }
  })
}