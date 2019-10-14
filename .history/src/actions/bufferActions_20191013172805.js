import * as types from './ationTypes'

function changeInput(base, value) {
    return {
        type: types.CHANGE_INPUT,
        base: base,
        value: value
    }
}

function changeInput(base, direction) {
    return {
        type: types.CHANGE_POCKET,
        base: base,
        direction: direction
    }
}