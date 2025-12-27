import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../../Components/BackButton/BackButton'
import { fetchRecipesById } from '../../API/RecipeApi'
import Spinner from '../../Components/Spinner/Spinner'

export default function Recipe() {
  const { idMeal } = useParams<{idMeal?: string}>()
  const [recipe, setRecipe]=useState<any>(null)
  const [loading, setLoading]=useState(true)

  useEffect(()=>{
    if(idMeal){
      fetchRecipesById(Number(idMeal))
      .then(data => {
        if(data && data.meals && data.meals[0]){
          setRecipe(data.meals[0])
        }
      })
      .catch(() => setRecipe([]))
      .finally(() => setLoading(false))
    }
  },[idMeal])

  return (
    <>
    <div>
      {loading ? (
        <Spinner/>) : (
          <div className='recipe' style={{width:'90%'}}>
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <p>{recipe.strInstructions}</p>
            <h4>Ingredients:</h4>
            <ul id="ingredient-recip" style={{display: 'block', maxWidth: 400, margin: '0 auto' }}>
              {(() => {
                const items = [];
                for (let i = 1; i <= 20; i++) {
                  const ingredient = recipe[`strIngredient${i}`];
                  const measure = recipe[`strMeasure${i}`];
                  if (ingredient && ingredient.trim()) {
                    items.push(
                      <li key={i}><strong>{ingredient}</strong>{measure ? ` : ${measure}` : ''}</li>
                    );
                  }
                }
                return items.length > 0 ? items : <li>No ingredients found</li>;
              })()}
            </ul>
          </div>
        )
      }
    </div>
    <BackButton />
    </>
  )
}

