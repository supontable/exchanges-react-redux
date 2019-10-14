import React from 'react'
import '../css/PocketsCarousel.css'
import { PocketWrapper } from './PocketWrapper' 

export function PocketCarousel(props) {
    return (
        <ul className={props.from ? 'Carousel' : 'Carousel Carousel__to'}>
            {pockets.map(pocket => <PocketWrapper {...pocket} />)}
        </ul>
    )
}