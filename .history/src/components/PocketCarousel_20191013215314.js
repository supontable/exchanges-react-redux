import React from 'react'
import '../css/PocketsCarousel.css'
import { PocketWrapper } from './PocketWrapper' 
import { useSelector } from 'react-redux'
export function PocketCarousel(props) {
  const pockets = useSelector(state=>state.pockets)
    return (
        <ul className={props.from ? 'Carousel' : 'Carousel Carousel__to'}>
            {pockets && pockets.map(pocket => <PocketWrapper {...pocket} />)}
        </ul>
    )
}