import * as types from '../actions/ationTypes';

const initialState = {
    isFetching: false,
    rates: [],
    error: null
}

export function ratesReducer(state = initialState, action) {
    switch(action.type) {
        case types.FETCH_RATES_REQUEST: 
            return {
                ...state,
                isFetching: true
            }
        case types.FETCH_RATES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                rates: action.payload
            }
        case types.FETCH_RATES_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        default: 
            return state;
    }
}