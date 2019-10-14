import * as types from './ationTypes'

export function changeFromValue(value) {
    return {
        type: types.CHANGE_FROM_VALUE,
        value: value
    }
}

export function changeFromValue(value) {
    return {
        type: types.CHANGE_TO_VALUE,
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