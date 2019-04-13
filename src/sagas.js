import regeneratorRuntime from 'regenerator-runtime';
import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
    yield takeLatest("API_CALL_REQUEST", workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchData() {
    return axios.get('http://localhost:8000/sounds/');
    // return await axios.get('http://192.168.7.2:8081/configuration/sounds');
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
    try {
        const response = yield call(fetchData);
        const data = response.data;

        yield put({ type: "API_CALL_SUCCESS", data });

    } catch (error) {
        yield put({ type: "API_CALL_FAILURE", error });
    }
}
