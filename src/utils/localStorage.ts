
import { useState, useEffect } from "react";


function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {

	const getValue = () => {
		const saved = localStorage.getItem(key)
		if (saved !== null) {
			try {
				return JSON.parse(saved) as T
			} catch {
				return initialValue
			}
		}
		return initialValue
	};

	const [value, setValue] = useState<T>(getValue)

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [key, value])


	return [value, setValue]
}

export default useLocalStorage
