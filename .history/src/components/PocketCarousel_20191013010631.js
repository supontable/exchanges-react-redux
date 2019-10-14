import React from 'react'
import '../css/PocketsCarousel.css'
import { PocketWrapper } from './PocketWrapper'

const pockets = [
    {
      base: 'USD',
      balance: 1000,
      symbol: '$'
    },
    {
      base: 'GBP',
      balance: 500,
      symbol: '£'
    },
    {
      base: 'EUR',
      balance: 700,
      symbol: '€'
    }
  ]

export function PocketCarousel(props) {
    return (
        <ul className={props.from ? 'Carousel' : 'Carousel Carousel__to'}>
            {pockets.map(pocket => <PocketWrapper {...pocket} />)}
        </ul>
    )
}