const initialState = {
  loading: false,
  popular: {
    page: 1,
    shows: []
  },
  show: {
    showInfo: {},
    networks: [],
    creators: [],
    similar: []
  },
  today: {
    shows: [],
    currentPage: 1,
    totalPages: null
  },
  topRated: {
    shows: [],
    currentPage: 1,
    totalPages: null
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

    case 'LOADING_TODAY':

      return {
        ...state,
        loading: true,
      }

    case 'ADD_AIRING_TODAY':

      return {
        ...state,
        loading: false,
        today: {
          shows: action.shows,
          currentPage: action.currentPage,
          totalPages: action.totalPages
        }
      }

    case 'LOADING_TOP_RATED':

      return {
        ...state,
        loading: true
      }

    case 'DISPLAY_TOP_RATED':

      return {
        ...state,
        loading: false,
        topRated: {
          shows: action.response.results,
          currentPage: action.currentPage,
          totalPages: action.response.total_pages
        }

      }

    default:
      return state;
  }
}

export default showReducer;