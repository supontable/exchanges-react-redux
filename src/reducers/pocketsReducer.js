import * as types from '../actions/ationTypes';

const initialState = {
    USD: {
        balance: 1000,
        symbol: '$'
    },
    GBP: {
        balance: 500,
        symbol: '£'
    },
    EUR: {
        balance: 700,
        symbol: '€'
    }
}

export function pocketsReducer(state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_POCKET_BALANCE:
            return {
                ...state,
                [action.base]: {
                    ...state[action.base],
                    balance: action.value
                }
            }
        default:
            return state;
    }
}