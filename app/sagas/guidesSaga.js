import { takeLatest, call, put, race } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import GuidesService from '../services/guidesService';
import { HTTP_REQUEST_TTL } from '../config/AppConfig';

function* fetchGuides() {
  yield put({ type: 'GET_GUIDES_REQUEST' });
  try {
    const { response, timeout } = yield race({
      response: call(GuidesService.FetchGuides),
      timeout: call(delay, HTTP_REQUEST_TTL),
    });

    if (timeout) {
      const e = new Error('Request timed out.');
      throw e;
    } else if (response) {
      yield put({ type: 'SET_GUIDES', data: response });
      yield put({ type: 'GET_GUIDES_SUCCESS' });
    }
  } catch (error) {
    yield put({ type: 'GET_GUIDES_FAILURE' });
  }
}

function* guidesSaga() {
  yield takeLatest('GET_GUIDES', fetchGuides);
}

export default guidesSaga;
