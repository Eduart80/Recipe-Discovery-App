import React from 'react';
import type { RecipeCardProps } from '../../types/types';
import './HomeCard.css';

export default function RecipeCard({ idMeal, strMeal, strMealThumb }: RecipeCardProps) {
  return (
    <div className="recipe-card">
      <h4>{strMeal}</h4>
      <img src={strMealThumb} alt={strMeal} style={{ width: '200px', borderRadius: '8px' }} />
    </div>
  );
}
