import { fork, all } from 'redux-saga/effects';

// our sagas
import guidesSaga from './guidesSaga';

export default function* rootSaga() {
  yield all([
    fork(guidesSaga),
  ]);
}
