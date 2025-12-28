import React, { useEffect, useState } from "react";
import { useFavorites } from "../../Context/FavoriteContext"
import "./HomeCard.css";
import Spinner from "../Spinner/Spinner";
import BackButton from "../BackButton/BackButton";

interface RecipeCardProps {
  idMeal: string
   strMeal?: string
  strMealThumb?: string
}

const RecipeCard: React.FC<RecipeCardProps> = ({ idMeal}) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites()
  const liked: boolean = Boolean(isFavorite && isFavorite(idMeal))
 

  const handleLike = () => {
    if (liked) {
      removeFavorite(idMeal)
    } else {
      addFavorite(idMeal)
    }
  }
 

  return (
    <>
      <button className='btn btn-success' style={{borderRadius:'20px', padding:'0 20px'}} onClick={handleLike}>
        {liked ? "♥ Liked" : "♡ Like"}
      </button>
    </>
  )
}

export default RecipeCard;
