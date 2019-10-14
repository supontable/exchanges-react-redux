
import {FETCH_RATES_REQUEST, FETCH_RATES_SUCCESS, FETCH_RATES_ERROR} from '../actions/ationTypes';

const initialState = {
    isFetching: false,
    rates: [],
    error: null
}

export function ratesReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_RATES_REQUEST: 
            return {
                ...state,
                isFetching: true
            }
        case FETCH_RATES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                rates: action.payload
            }
        case FETCH_RATES_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        default: 
            return state;
    }
}