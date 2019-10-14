import * as types from '../actions/ationTypes';

const initialState = {
    from: {
        base: 'USD',
        inputValue: null
    },
    to: {
        base: 'GBP',
        inputValue: null
    }
}

export function bufferReducer(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_FROM_VALUE:
            return {
                ...state,
                from: {
                    ...state.from,
                    inputValue: action.value
                }
            }
        case types.CHANGE_TO_VALUE:
            return {
                ...state,
                to: {
                    ...state.to,
                    inputValue: action.value
                }
            }
        case types.CHANGE_POCKET_BASE:
            return {
                ...state,
                [action.direction]: {
                    ...state[action.direction],
                    base: action.base
                }
            }
        default:
            return state;
    }
}