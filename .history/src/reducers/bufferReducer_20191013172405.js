import * as types from '../actions/ationTypes';

const initialState = {
    pocketFrom: {
        base: 'USD',
        inputValue: null
    },
    pocketTo: {
        base: 'GBP',
        inputValue: null
    }
}

export function pocketsReducer(state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_POCKET_BALANCE:
            return {
                ...state,
                [acton.base]: {
                    ...state[action.base],
                    balance: action.value
                }
            }
        default:
            return state;
    }
}