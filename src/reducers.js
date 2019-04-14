import { combineReducers } from 'redux';

const GET_SOUNDS_REQUEST = "GET_SOUNDS_REQUEST";
const GET_SOUNDS_SUCCESS = "GET_SOUNDS_SUCCESS";
const GET_SOUNDS_FAILURE = "GET_SOUNDS_FAILURE";

const initialState = {
    fetching: false,
    data: null,
    error: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_SOUNDS_REQUEST:
            return { ...state, fetching: true, error: null, data: null} ;
        case GET_SOUNDS_SUCCESS:
            return { ...state, fetching: false, data: action.data };
        case GET_SOUNDS_FAILURE:
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
