import { put, call, takeLatest, all } from 'redux-saga/effects'

import types from '../core/actions/types/charactersTypes'
import { movieApi } from '../../services/movieApi'

function* loadCharsSaga(action) {
  try {
    let jsonResponse = yield call(movieApi, action.payload)
    yield put({ type: types.SET_CHARACTERS, payload: jsonResponse })
  }  catch (err) {
    //yield put(failure(err))
    console.log('Error')
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(types.LOAD_CHARACTERS_SAGA, loadCharsSaga)
  ])
}
