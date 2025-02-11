import { takeEvery, call, put } from 'redux-saga/effects';

export default function* watcherSaga() {
  yield takeEvery("DATA_REQUESTED", workerSaga);
}

function getData(){
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
}

function* workerSaga(){
  try{
    const payload = yield call(getData);
    yield put({type: "DATA_LOADED", payload});
  }catch(e){
    yield put({type: "API_ERROR", payload: e});
  }
}
