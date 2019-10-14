import React from 'react'
import '../css/PocketsCarousel.css'

export function PocketCarousel (props) {
    return (
        <div className={props.from ? 'Carousel' : 'Carousel Carousel__to'}>{props.children}</div>
    )
}