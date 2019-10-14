import * as types from './ationTypes'

function updatePocketBalance(base, value) {
    return {
        type: types.UPDATE_POCKET_BALANCE,
        base: base,
        value: value
    }
}
