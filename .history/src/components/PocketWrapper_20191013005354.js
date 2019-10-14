import React from 'react'
import '../css/PocketWrapper.css'
import { ExchangeInput } from './ExchangeInput'

export function PocketWrapper () {
    return (
        <div className='Pocket'>
            <span className='Pocket__base'></span>
            <ExchangeInput />
            <span className='Pocket__balance'></span>
            <span className='Pocket__rate'></span>
        </div>
    )
}