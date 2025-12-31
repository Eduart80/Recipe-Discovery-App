import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import useFetch from "../../utils/useFetch";
import CategoryCard from "../../Components/RecipeCard/CategoryCard";
import BackButton from "../../Components/BackButton/BackButton";
import "../Category/category.css";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const { data, loading, error } = useFetch(
    query
      ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      : null
  );

  if (!query) return <div>Please enter a search term.</div>;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data || !data.meals) return <div>No results found.</div>;

  return (
    <>
      <BackButton />
      <div>
        <h2>Search Results for "{query}"</h2>
        <div className="category-grid">
          {data.meals.map((meal: any) => (
            <Link key={meal.idMeal} to={`/recipe/${meal.idMeal}`}>
              <CategoryCard {...meal} />
            </Link>
          ))}
        </div>
      </div>
      <hr />
      <BackButton />
    </>
  );
}
