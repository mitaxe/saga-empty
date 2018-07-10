import { call, put, takeLatest } from 'redux-saga/effects'
import * as actionTypes from '../constants/actionTypes'
import { getUser } from '../service/userService'

function* fetchUser(action) {
  const { FETCH_DATA } = actionTypes
  try {
    const result = yield call(getUser, action);
    yield put({
      type: FETCH_DATA.SUCCESS,
      payload: { ...result }
    });
  } catch (e) {
    yield put({ type: FETCH_DATA.FAIL, error: e.message });
  }
}

export function* mySaga() {
  const { FETCH_DATA } = actionTypes
  yield takeLatest(FETCH_DATA.REQUEST, fetchUser);
}

export default mySaga;