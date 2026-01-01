import React, { useEffect, useState } from 'react'
import BackButton from '../../Components/BackButton/BackButton'
import { useFavorites } from '../../Context/FavoriteContext'
import { NetworkError, DataError } from '../../Components/ErrorMessage/ErrorMessage'
import type {RecipeCardProps} from '../../types/types'
import RecipeLike from '../../Components/RecipeCard/RecipeLike'

export default function Favorites() {
  const { favoriteIds } = useFavorites()
  console.log(favoriteIds);
  
  const [recipes, setRecipes] = useState<(RecipeCardProps | null)[]>([])
  const [loading, setLoading] = useState(true)

  const getFavorites =()=>{
      try {
        const promises = favoriteIds.map(id =>
          fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
          .then(res => {
            if (!res.ok) throw new NetworkError();
            return res.json();
          })
          .then(data => {
            if (!data.meals) throw new DataError();
            return data.meals[0];
          })
        );
        return Promise.all(promises);
      } catch (e) {
        console.error(e);
        return [];
      }
    }

  useEffect(() => {
  async function fetchFavorites() {
    setLoading(true);
    const recipes = await getFavorites();
    setRecipes(recipes);
    setLoading(false);
  }
  if (favoriteIds.length > 0) {
    fetchFavorites();
  } else {
    setRecipes([]);
    setLoading(false);
  }
}, [favoriteIds]);
    
  return (
    <>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : recipes.length === 0 ? (
          <p>No Favorites yet.</p>
        ) : (
          recipes.map(recipe =>
            recipe && 
            <div className='recipe' style={{width:'90%'}}>
            <div>
            <h2>{recipe.strMeal}</h2>
            <RecipeLike
              idMeal={recipe.idMeal}
            />
            </div>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <p>{recipe.strInstructions}</p>
            <h4>Ingredients:</h4>
            <ul id="ingredient-recip" style={{display: 'block', maxWidth: 400, margin: '0 auto' }}>
              {(() => {
                const items = [];
                for (let i = 1; i <= 20; i++) {
                  const ingredient = (recipe as any)[`strIngredient${i}`];
                  const measure = (recipe as any)[`strMeasure${i}`];
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
        )}
      </div>
      <hr />
      <BackButton />
    </>
  );
}
