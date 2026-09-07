import type { Movie } from "../../../../types/movie";
import { useState, useEffect } from "react";
import { LayoutContext } from "./LayoutContext";

export function LayoutProvider(props: {children: React.ReactNode}) {
    const [clickedIcon, setClickedIcon] = useState("");
    const [favorites, setFavorites] = useState<Movie[]>(JSON.parse(localStorage.getItem("favorites") || "[]"));
    const [isGrid, setIsGrid] = useState(true);
    const [query, setQuery] = useState("");    

    /* clicked toolbar icons */

    function handleClickedIcon(iconName: string) {
        setClickedIcon(iconName);
        
        setTimeout(() => {
            setClickedIcon("");
        }, 500);
    }
    
    /* favorites */

    useEffect(() => {
          localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    function handleAddFavorite(newFavorite: Movie) {
        setFavorites([...favorites, newFavorite]);
    }

    function handleRemoveFavorite(exFavorite: Movie) {
        const remainingFavorites = favorites.filter(favorite => favorite.id !== exFavorite.id);
        setFavorites(remainingFavorites);
    }

    /* search */

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        setQuery(event.target.value);
    }

    function handleResetSearch() {
        setQuery("");
    }
    
    /* grid / list switch */

    function onToggleLayout() {
        setIsGrid(!isGrid)
    }


    
    return <LayoutContext value={{clickedIcon, favorites, query, isGrid, handleClickedIcon, handleAddFavorite, handleRemoveFavorite, handleSearch, handleResetSearch , onToggleLayout}}>{props.children}</LayoutContext>
}