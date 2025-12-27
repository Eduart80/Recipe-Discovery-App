import React from 'react'
import type { Categories } from '../../types/types'

export default function CategoryCard(props:Categories) {
  return (
    <>
    <div >
        <h4>{props.strMeal}</h4>
        <img src={props.strMealThumb} alt='category'/>
    </div>
    </>
  )
}
