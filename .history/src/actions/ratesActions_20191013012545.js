import * as types from './ationTypes'

function fetchRatesRequest() {
    return {
        type: types.FETCH_RATES_REQUEST
    }
}

function fetchRatesSuccess(rates) {
    return {
        type: types.FETCH_RATES_SUCCESS,
        rates: rates
    }
}

function fetchRatesError(error) {
    return {
        type: types.FETCH_RATES_ERROR,
        error: error
    }
}
