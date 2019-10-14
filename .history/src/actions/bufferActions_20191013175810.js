import * as types from './ationTypes'

export function changeInputVslue(base, value) {
    return {
        type: types.CHANGE_INPUT,
        base: base,
        value: value
    }
}

export function changePocketBase(base, direction) {
    return {
        type: types.CHANGE_POCKET,
        base: base,
        direction: direction
    }
}