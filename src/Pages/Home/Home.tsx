
import React, { useState, useEffect } from 'react';
import Spinner from '../../Components/Spinner/Spinner';
import BackButton from '../../Components/BackButton/BackButton';
import {fetchAllRecipes} from '../../API/RecipeApi'
import HomeCard from '../../Components/RecipeCard/HomeCard';
import './home.css'
import { Link } from 'react-router-dom';

export default function Home() {
    const [loading, setLoading] = useState(true)
    const [data, setData]=useState([])

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000)
        return () => clearTimeout(timer);
    }, [])
    useEffect(()=>{
      fetchAllRecipes()
      .then(res => setData(res.categories || []))
      .catch(()=>setData([]))
      .finally(()=>setLoading(false))
    })
    
  return (
    <>
        <div>
            {loading ?
             (<Spinner />)
            :(<div className='category-grid'>
              {data.map((category: any) => (
               <Link key={category.idCategory} to={`/category/${category.strCategory}`}>
                <HomeCard {...category} />
                </Link>
              ))}
            </div>) 
            }
        </div>
    </>
  )
}
