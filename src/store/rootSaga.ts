/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { all } from 'redux-saga/effects';

import dragon from './dragons/saga';

export default function* rootSaga() {
  return yield all([dragon]);
}
