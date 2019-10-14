import React from 'react'
import '../css/ExchangeInput.css'

export function ExchangeInput () {
    return (
        <input type='number' step=".01" pattern="^\d+(?:\.\d{1,2})?$" ></input>
    )
}