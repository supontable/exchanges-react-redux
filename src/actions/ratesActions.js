import * as types from './ationTypes'

const APP_ID = '2ba3e04278e142c192e51f9bec3cf4f8'

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

function fetchRates(base) {
    return dispatch => {
        dispatch(fetchRatesRequest());
        fetch(`https://openexchangerates.org/api/latest.json?app_id=${APP_ID}&base=${base}`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchRatesSuccess(res.rates));
            return res.rates;
        })
        .catch(error => {
            dispatch(fetchRatesError(error));
        })
    }
}

export default fetchRates;