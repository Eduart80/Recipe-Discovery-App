import {NetworkError, DataError} from '../Components/ErrorMessage/ErrorMessage'

export async function fetchAllRecipes() {
  const respond = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  if(!respond.ok) throw new NetworkError()
  return respond.json()
}


export async function fetchRecipesById(id:number) {
  const respond = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  if(!respond.ok) throw new NetworkError()
  const data = await respond.json()
  if(!data.meals) throw new DataError()
  return data
}
export async function fetchByCategory(category:string) {
  const respond = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
  if(!respond.ok) throw new NetworkError()
  const data = await respond.json()
  if(!data.meals) throw new DataError()
  return data
}