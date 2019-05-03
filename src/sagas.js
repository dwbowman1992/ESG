import regeneratorRuntime from 'regenerator-runtime';
import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

export function* watcherSaga() {
    yield takeLatest("GET_SOUNDS_REQUEST", workerSaga);
    yield takeLatest("GET_CONFIGURATION_REQUEST", workerSaga);
}

function getSounds() {
    // TODO remove. Only for development
    /*return axios.get('http://localhost:8000/sounds/', {
        timeout: 1000
    });*/
    return axios.get('http://192.168.7.2:8081/sounds/', {
        timeout: 1000
    });
}

function getConfiguration() {
    // TODO remove. Only for development
    /*return axios.get('http://localhost:8000/configuration/', {
        timeout: 1000
    });*/
    return axios.get('http://192.168.7.2:8081/configuration/', {
        timeout: 1000
    });
}

function* workerSaga(request) {
    switch (request.type) {
        case "GET_SOUNDS_REQUEST": {
            try {
                const response = yield call(getSounds);
                const data = response.data;

                yield put({ type: "GET_SOUNDS_SUCCESS", data });

            } catch (error) {
                yield put({ type: "GET_SOUNDS_FAILURE", error });
            }
            break;
        }
        case "GET_CONFIGURATION_REQUEST": {
            try {
                const response = yield call(getConfiguration);
                const data = response.data;

                yield put({ type: "GET_CONFIGURATION_SUCCESS", data });

            } catch (error) {
                yield put({ type: "GET_CONFIGURATION_FAILURE", error });
            }
            break;
        }
        default: break;
    }
}
