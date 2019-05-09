const API_KEY = process.env.REACT_APP_TV_API_KEY;

export function fetchPopular(page = 1) {
  return dispatch => {
    dispatch({ type: "LOADING_POPULAR" });
    return fetch(`http://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&page=${page}`)
      .then(res => res.json())
      .then(res => dispatch({
        type: "ADD_POPULAR_SHOWS",
        currentPage: res.page,
        totalPages: res.total_pages,
        shows: res.results
      }))
  }
}

export function fetchShow(id) {
  return dispatch => {
    dispatch({ type: "LOADING_SHOW" });
    return fetch(`http://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(show => dispatch({
        type: "DISPLAY_SHOW",
        showInfo: show
      }))
  }
}

export function fetchSimilar(id) {
  return dispatch => {
    dispatch({ type: "LOADING_SIMILAR" });
    return fetch(`http://api.themoviedb.org/3/tv/${id}/similar?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(shows => dispatch({
        type: "DISPLAY_SIMILAR",
        shows: shows
      }))
  }
}

