import React from 'react'
import '../css/PocketsCarousel.css'
import { PocketWrapper } from './PocketWrapper' 
import { useSelector } from 'react-redux'
export function PocketCarousel(props) {
  const pockets = useSelector(state=>state.pocketsReducer)
  const pocketsList = Object.keys(pockets)
    return (
        <ul className={props.from ? 'Carousel' : 'Carousel Carousel__to'}>
            {pocketsList && pocketsList.map((base, id) => <PocketWrapper key={id} base={base} />)}
        </ul>
    )
}