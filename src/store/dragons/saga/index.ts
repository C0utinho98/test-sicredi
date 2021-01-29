/* eslint-disable no-plusplus */
import { all, takeLatest, put } from 'redux-saga/effects';
import { Dragon } from '../reducer/types';

import { getDragonsRequest, getDragonsSuccess } from '../reducer/actions';

type GetDragonsRequest = ReturnType<typeof getDragonsRequest>;

function* getBooks({ payload }: GetDragonsRequest) {
  let cont = 0;
  let aux = 1;
  const array: [Dragon[]] = [[]];
  array.push([]);
  const alphabeticalList = payload.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0,
  );
  alphabeticalList.forEach(el => {
    if (cont === 8) {
      array.push([]);
      aux++;
      cont = 0;
    }
    cont++;
    array[aux].push(el);
  });

  array.splice(0, 1);

  yield put(getDragonsSuccess({ dragons: array, totalPages: array.length }));
}
export default all([takeLatest('GET_DRAGONS_REQUEST', getBooks)]);
