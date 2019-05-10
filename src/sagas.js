import regeneratorRuntime from 'regenerator-runtime';
import { takeLatest, call, put, post, takeEvery } from "redux-saga/effects";
import axios from "axios";

export function* watcherSaga() {
    yield takeLatest("GET_SOUND_REQUEST", workerSaga);
    yield takeLatest("GET_CONFIGURATION_REQUEST", workerSaga);
    yield takeLatest('POST_UPDATE_SETTINGS', workerSaga)
}

function getSound() {
    // TODO remove. Only for development
    // return axios.get('http://localhost:8000/sounds/', {
    //     timeout: 1000
    // });
    return axios.get('http://192.168.7.2:8081/sound/', {
        timeout: 1000
    });
}

function getConfiguration() {
    // TODO remove. Only for development
    // return axios.get('http://localhost:8000/configuration/', {
    //     timeout: 1000
    // });
    return axios.get('http://192.168.7.2:8081/configuration/', {
        timeout: 1000
    });
}

function postConfiguration() {
    // TODO remove. Only for development
    // return axios.post('http://localhost:8000/configuration/', {
    //     timeout: 1000,
    //     targetFrequencies: '123, 160',
    //     errorThreshold: '2',
    //     isDarkMode: '3',
    // });
    return axios.post('http://192.168.7.2:8081/configuration/', {
        timeout: 1000
    });
}

function* workerSaga(request) {
    switch (request.type) {
        case "GET_SOUND_REQUEST": {
            try {
                const response = yield call(getSound);
                const data = response.data;

                yield put({ type: "GET_SOUND_SUCCESS", data });

            } catch (error) {
                yield put({ type: "GET_SOUND_FAILURE", error });
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
        case 'POST_UPDATE_SETTINGS': {
          try {
            const settingsUpdated = yield call(postConfiguration, request.obj);
            console.log('values: ', request.obj);
            const data = response.data;

            yield put({ type: 'UPDATE_SETTINGS_SUCCESS', data});

          } catch (error) {
            yield put({ type: 'UPDATE_SETTINGS_FAILURE', error});
          }
        }

        default: break;
    }
}
