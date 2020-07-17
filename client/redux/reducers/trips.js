import axios from 'axios'

const GET_TRIPS = 'GET_TRIPS'

const initialState = {
  list: [],
  pageCount: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRIPS: {
      return { ...state, list: action.trips, pageCount: action.pageCount }
    }
    default:
      return state
  }
}

export function getTrips(params = {}) {
  return (dispatch) => {
    const { token } = localStorage
    if (token) {
      axios({
        method: 'get',
        url: '/api/v3/orders/trips',
        headers: { Authorization: `Bearer ${token}` },
        params
      })
        .then(({ data }) => {
          if (data.result) {
            dispatch({
              type: GET_TRIPS,
              trips: data.result.orders,
              pageCount: data.result.page_data.page_count
            })
          }
          if (data.error) {
            localStorage.removeItem('token')
          }
        })
        .catch((err) => console.log(err))
    }
  }
}
