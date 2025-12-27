import { useEffect, useState } from 'react'
import BackButton from '../../Components/BackButton/BackButton'
import {fetchByCategory} from '../../API/RecipeApi'
import { useParams, Link } from 'react-router-dom'
import Spinner from '../../Components/Spinner/Spinner'
import CategoryCard from '../../Components/RecipeCard/CategoryCard'
import './category.css'

export default function Category() {
  const { strCategory } = useParams<{ strCategory?: string }>()
 const [dataCategory, setDataCategory] =useState([])
 const [loading, setLoading]=useState(true)

useEffect(() => {
  if (strCategory) {
    const fetchData = async () => {
      await fetchByCategory(strCategory)
        .then(res => setDataCategory(res.meals || []))
        .catch(() => setDataCategory([]))
        .finally(() => setLoading(false))
    }
    fetchData()
    console.log(fetchData);
    
  } else {
    setLoading(false)
  }
}, [strCategory]);

  return (
    <>
    <h3>Recipe of {strCategory} category</h3>
    <p>Bon appétit!</p>
    {loading ? 
    (<Spinner />) :
    (<div className='category-grid'>
          {dataCategory.map((category: any) => (
            <Link key={category.idMeal}
             to={`/recipe/${category.idMeal}`}>
              <CategoryCard {...category}/>
            </Link>
          ))}
      </div>) }
    <BackButton />
    </>
  )
}
