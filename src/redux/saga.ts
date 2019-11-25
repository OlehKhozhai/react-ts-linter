import { takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';

function* getMainInfo() {
  try {
    // yield put(getBooksRequest());

    const { data } = yield call(() =>
      axios.get('https://test.esensapp.com/books/api'),
    );
    console.log('data', data);
    // yield put(getBooksActionSuccess(data));
  } catch (err) {
    console.log('err', err);

    // yield put(getBooksActionFail(err));
  }
}

export default function* rootSaga() {
  yield takeEvery('GET_MAIN_PAGE', getMainInfo);
}
