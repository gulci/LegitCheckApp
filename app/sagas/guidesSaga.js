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
      const mappedResponse = [];
      Object.keys(response).forEach((key) => {
        mappedResponse.push({
          ...response[key],
          key,
        });
      });

      yield put({ type: 'SET_GUIDES_ITEMS', data: mappedResponse });
      yield put({ type: 'GET_ITEMS_SUCCESS' });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: 'GET_ITEMS_FAILURE', error });
  }
}

function* fetchVarieties(action) {
  const { id } = action;

  yield put({ type: 'GET_VARIETIES_REQUEST' });

  try {
    const { response, timeout } = yield race({
      response: call(GuidesService.FetchVarieties, id),
      timeout: call(delay, HTTP_REQUEST_TTL),
    });

    if (timeout) {
      const e = new Error('Request timed out.');
      throw e;
    } else if (response) {
      const mappedResponse = [];
      Object.keys(response).forEach((key) => {
        mappedResponse.push({
          ...response[key],
          key: id,
        });
      });

      yield put({ type: 'SET_GUIDES_VARIETIES', id, data: mappedResponse });
      yield put({ type: 'GET_VARIETIES_SUCCESS' });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: 'GET_VARIETIES_FAILURE' });
  }
}

function* fetchTells(action) {
  const { id } = action;

  yield put({ type: 'GET_TELLS_REQUEST' });

  try {
    const { response, timeout } = yield race({
      response: call(GuidesService.FetchTells, id),
      timeout: call(delay, HTTP_REQUEST_TTL),
    });

    if (timeout) {
      const e = new Error('Request timed out.');
      throw e;
    } else if (response) {
      yield put({ type: 'SET_TELLS_VARIETIES', id, data: response });
      yield put({ type: 'GET_TELLS_SUCCESS' });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: 'GET_TELLS_FAILURE' });
  }
}

function* guidesSaga() {
  yield takeLatest('GET_ITEMS', fetchItems);
  yield takeLatest('GET_VARIETIES', fetchVarieties);
  yield takeLatest('GET_TELLS', fetchTells);
}

export default guidesSaga;
