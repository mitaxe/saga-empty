import { FETCH_DATA } from '../constants/actionTypes'

export const getUser = name => ({ type: FETCH_DATA.REQUEST, name });
