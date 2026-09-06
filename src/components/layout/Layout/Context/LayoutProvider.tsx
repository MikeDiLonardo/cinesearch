import type { Movie } from "../../../../types/movie";
import { useState, useEffect } from "react";
import { LayoutContext } from "./LayoutContext";

export function LayoutProvider(props: {children: React.ReactNode}) {
    const [clickedIcon, setClickedIcon] = useState("");
    const [favorites, setFavorites] = useState<Movie[]>(JSON.parse(localStorage.getItem("favorites") || "[]"));
    const [isGrid, setIsGrid] = useState(true);

    useEffect(() => {
          localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    function handleClickedIcon(iconName: string) {
        setClickedIcon(iconName);
        
        setTimeout(() => {
            setClickedIcon("");
        }, 500);
    }

    function handleAddFavorite(newFavorite: Movie) {
        setFavorites([...favorites, newFavorite]);
    }

    function handleRemoveFavorite(exFavorite: Movie) {
        const remainingFavorites = favorites.filter(favorite => favorite.id !== exFavorite.id);
        setFavorites(remainingFavorites);
    }

    function onToggleLayout() {
        setIsGrid(!isGrid)
    }

    
    return <LayoutContext value={{clickedIcon, favorites, isGrid, handleClickedIcon, handleAddFavorite, handleRemoveFavorite, onToggleLayout}}>{props.children}</LayoutContext>
}