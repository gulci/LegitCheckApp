import { takeLatest, call, put, race } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import GuidesService from '../services/guidesService';
import { HTTP_REQUEST_TTL } from '../config/AppConfig';

function* fetchItems() {
  yield put({ type: 'GET_ITEMS_REQUEST' });
  try {
    const { response, timeout } = yield race({
      response: call(GuidesService.FetchItems),
      timeout: call(delay, HTTP_REQUEST_TTL),
    });

    if (timeout) {
      const e = new Error('Request timed out.');
      throw e;
    } else if (response) {
      yield put({ type: 'SET_GUIDES_ITEMS', data: response });
      yield put({ type: 'GET_ITEMS_SUCCESS' });
    }
  } catch (error) {
    yield put({ type: 'GET_ITEMS_FAILURE', error });
  }
}

function* fetchVarieties(action) {
  const { itemId } = action;
  yield put({ type: 'GET_VARIETIES_REQUEST' });
  try {
    const { response, timeout } = yield race({
      response: call(GuidesService.FetchVarieties, itemId),
      timeout: call(delay, HTTP_REQUEST_TTL),
    });

    if (timeout) {
      const e = new Error('Request timed out.');
      throw e;
    } else if (response) {
      yield put({ type: 'SET_GUIDES_VARIETIES', itemId, data: response });
      yield put({ type: 'GET_VARIETIES_SUCCESS' });
    }
  } catch (error) {
    yield put({ type: 'GET_VARIETIES_FAILURE', error });
  }
}

function* fetchTells(action) {
  const { varietyId } = action;
  yield put({ type: 'GET_TELLS_REQUEST' });
  try {
    const { response, timeout } = yield race({
      response: call(GuidesService.FetchTells, varietyId),
      timeout: call(delay, HTTP_REQUEST_TTL),
    });

    if (timeout) {
      const e = new Error('Request timed out.');
      throw e;
    } else if (response) {
      yield put({
        type: 'SET_GUIDES_TELLS',
        varietyId,
        data: response,
      });
      yield put({ type: 'GET_TELLS_SUCCESS' });
    }
  } catch (error) {
    yield put({ type: 'GET_TELLS_FAILURE', error });
  }
}

function* guidesSaga() {
  yield takeLatest('GET_ITEMS', fetchItems);
  yield takeLatest('GET_VARIETIES', fetchVarieties);
  yield takeLatest('GET_TELLS', fetchTells);
}

export default guidesSaga;
