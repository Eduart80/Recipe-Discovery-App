import React from 'react'
import type { Categories } from '../../types/types'
import './HomeCard.css'

export default function HomeCard(props:Categories) {
  return (
    <>
        <div>
            <h4>{props.strCategory}</h4>
            <img src={props.strCategoryThumb} alt='category'/>
        </div>
    </>
  )
}
