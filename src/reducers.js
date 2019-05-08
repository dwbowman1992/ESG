import { combineReducers } from 'redux';

const GET_SOUND_REQUEST = "GET_SOUND_REQUEST";
const GET_SOUND_SUCCESS = "GET_SOUND_SUCCESS";
const GET_SOUND_FAILURE = "GET_SOUND_FAILURE";

const GET_DIRECTION_REQUEST = "GET_DIRECTION_REQUEST";
const GET_DIRECTION_SUCCESS = "GET_DIRECTION_SUCCESS";
const GET_DIRECTION_FAILURE = "GET_DIRECTION_FAILURE";

const initialState = {
    fetching: false,
    data: null,
    error: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_SOUND_REQUEST:
            return { ...state, fetching: true, error: null, data: null} ;
        case GET_SOUND_SUCCESS:
            return { ...state, fetching: false, data: action.data };
        case GET_SOUND_FAILURE:
            return { ...state, fetching: false, data: null, error: action.error };
        case GET_DIRECTION_REQUEST:
            return { ...state, fetching: true, error: null, data: null} ;
        case GET_DIRECTION_SUCCESS:
            return { ...state, fetching: false, data: action.data };
        case GET_DIRECTION_FAILURE:
            return { ...state, fetching: false, data: null, error: action.error };
        default:
            return state;
    }
}

export default (routerReducer) => {
  return combineReducers({
    reducer
  });
};
