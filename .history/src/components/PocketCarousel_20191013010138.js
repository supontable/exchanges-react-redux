import React from 'react'
import '../css/PocketsCarousel.css'
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
        <div className={props.from ? 'Carousel' : 'Carousel Carousel__to'}>
            {props.children}
        </div>
    )
}