
export const GET_CART_REQUEST = 'GET_CART_REQUEST';
export const getCartRequest = () => ({
  type: GET_CART_REQUEST
});


export const getCartItems = userInput => dispatch => {
    dispatch(getCartRequest());
    // fetch(
    //   `${API_BASE_URL}?method=artist.getsimilar&artist=${formattedInput}&api_key=${API_KEY}&format=json`,
    //   {}
    // )
    //   .then(res => {
    //     if (!res.ok) {
    //       console.log('bad response');
    //       throw new Error(res.statusText);
    //     }
    //     return res.json();
    //   })
    //   .then(data => {
    //     if (data.message) {
    //       dispatch(getSimilarArtistError(data.message));
    //     } else {
    //       dispatch(saveOriginalArtist(formattedArtist));
    //     }
    //   })
  
    //   .catch(err => {
        // console.log('ended up in a error catch', err);
        // dispatch(getSimilarArtistError(err.message));
    //   });
  };