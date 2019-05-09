const initialState = {
  loading: false,
  popular: {
    page: 1,
    shows: []
  },
  shows: [],
  show: {
    showInfo: {},
    networks: [],
    creators: [],
    similar: []
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
          currentPage: action.currentPage,
          totalPages: action.totalPages,
          shows: action.shows
        }
      }

    case "LOADING_SHOW":

      return {
        ...state,
        loading: true
      }

    case "DISPLAY_SHOW":

      return {
        ...state,
        loading: false,
        show: {
          showInfo: action.showInfo,
          networks: action.showInfo.networks,
          creators: action.showInfo.created_by,
          year: action.showInfo.first_air_date.split("-")[0]
        }
      }

    case "LOADING_SIMILAR":

      return {
        ...state,
        loading: true
      }

    case 'DISPLAY_SIMILAR':

      return {
        ...state,
        loading: false,
        similar: action.shows.results
      }

    default:
      return state;
  }
}

export default showReducer;