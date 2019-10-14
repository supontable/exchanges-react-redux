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
        fetch('https://exampleapi.com/products')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchProductsSuccess(res.products);
            return res.products;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
    }
}

export default fetchProducts;