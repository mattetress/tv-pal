const API_KEY = process.env.REACT_APP_TV_API_KEY;

export function fetchPopular(page = 1) {
  return dispatch => {
    dispatch({ type: "LOADING_POPULAR" });
    return fetch(`http://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&page=${page}`)
      .then(res => res.json())
      .then(res => dispatch({ 
        type: "ADD_POPULAR_SHOWS",
        page: res.page,
        shows: res.results
      }))
  }
}

