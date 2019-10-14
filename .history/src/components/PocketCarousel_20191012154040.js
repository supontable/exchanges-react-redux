import React from 'react'
import '../css/PocketsCarousel.css'

export function PocketCarousel (props) {
    return (
        <div className='Carousel'>{props.children}</div>
    )
}