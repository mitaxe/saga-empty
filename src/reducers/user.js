import * as actionTypes from '../constants/actionTypes'

const initialState = {
  name: 'Alex'
};

export const userReducer = (state = initialState, action) => {
  const { FETCH_DATA } = actionTypes
  switch (action.type) {
    case FETCH_DATA.REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case FETCH_DATA.SUCCESS: {
      console.log(action)
      return {
        ...state,
        ...action.payload,
        loading: false
      }
    }
    case FETCH_DATA.FAIL: {
      return {
        ...state,
        loading: false
      }
    }

    default: {
      return state
    }
  }
}
