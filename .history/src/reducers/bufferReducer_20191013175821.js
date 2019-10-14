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

export function bufferReducer(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_INPUT_VALUE:
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