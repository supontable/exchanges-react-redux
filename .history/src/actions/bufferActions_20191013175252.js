import * as types from './ationTypes'

export function changeInput(base, value) {
    return {
        type: types.CHANGE_INPUT,
        base: base,
        value: value
    }
}

export function changePocket(base, direction) {
    return {
        type: types.CHANGE_POCKET,
        base: base,
        direction: direction
    }
}