const initialState = {
  loading: false,
  popular: {
    page: 1,
    shows: []
  }
}

const showReducer = (state = initialState, action) => {
  switch (action.type) {

    case "LOADING_POPULAR":

      return {
        ...state,
        loading: true
      }

    case "ADD_POPULAR_SHOWS":

      return {
        ...state,
        loading: false,
        popular: {
          page: action.page,
          shows: action.shows
        }
      }

    default:
      return state;
  }
}

export default showReducer;