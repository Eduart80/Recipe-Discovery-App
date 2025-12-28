export interface Categories {
    idMeal?:string | number
    strMeal? : string
    strMealThumb?:string
    strCategory: string,
    strCategoryThumb: string
}

export interface FavoriteContextType {
    favoriteIds:string[]
    addFavorite: (id:string) =>void
    removeFavorite:(id:string)=>void
    isFavorite: (id:string) =>void
}


export interface RecipeCardProps {
    idMeal: string
    strMeal?: string
    strMealThumb?: string
    strCategory?: string,
    strArea?: string,
    strInstructions?: string,
    strIngredient?: string,
    strMeasure?: string
}