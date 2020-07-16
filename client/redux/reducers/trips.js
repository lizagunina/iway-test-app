import axios from 'axios'

const GET_TRIPS = 'GET_TRIPS'

const initialState = {
  list: [],
  params: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRIPS: {
      return { ...state, list: action.trips }
    }
    default:
      return state
  }
}

export function getTrips() {
  return (dispatch, getState) => {
    const { token } = localStorage
    const { params } = getState().trips
    if (token) {
      axios({
        method: 'get',
        url: '/api/v3/orders/trips',
        headers: { Authorization: `Bearer ${token}` },
        params
      })
        .then(({ data }) => {
          if (data.result) {
            dispatch({ type: GET_TRIPS, trips: data.result.orders })
            console.log(data.result.orders)
          }
          if (data.error) {
            localStorage.removeItem('token')
          }
        })
        .catch((err) => console.log(err))
    }
  }
}
