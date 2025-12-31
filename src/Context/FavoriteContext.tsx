import React, { createContext, useContext } from "react";
import type { ReactNode } from "react";
import type { FavoriteContextType } from "../types/types"
import useLocalStorage from "../utils/localStorage";

const FavoritesContext = createContext<FavoriteContextType | undefined>(undefined)

// Provider
export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
	const [favoriteIds, setFavoriteIds] = useLocalStorage<string[]>("favoriteRecipes", [])

	const addFavorite = (id: string) => {
		if (!favoriteIds.includes(id)) {
			setFavoriteIds([...favoriteIds, id])
		}
	};

	const removeFavorite = (id: string) => {
		setFavoriteIds(favoriteIds.filter((favoriteId: string) => favoriteId !== id))
	};

	const isFavorite = (id: string) => favoriteIds.includes(id)

	return (
		<FavoritesContext.Provider value={{ favoriteIds, addFavorite, removeFavorite, isFavorite }}>
			{children}
		</FavoritesContext.Provider>
	)
}

export const useFavorites = () => {
	const context = useContext(FavoritesContext)
	if (!context) {
		throw new Error("Must be used within a FavoritesProvider")
	}
	return context
}