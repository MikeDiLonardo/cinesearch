import type { Movie } from "../../../../types/movie";
import { useState, useEffect } from "react";
import { LayoutContext } from "./LayoutContext";

export function LayoutProvider(props: {children: React.ReactNode}) {
    const [clickedIcon, setClickedIcon] = useState("");
    const [favorites, setFavorites] = useState<Movie[]>(JSON.parse(localStorage.getItem("favorites") || "[]"));
    const [isGrid, setIsGrid] = useState(true);
    const [query, setQuery] = useState("");    
    const [submittedQuery, setSubmittedQuery] = useState("");    
    const [pageNumber, setPageNumber] = useState(1);

    /* clicked toolbar icons */

    function handleClickedIcon(iconName: string) {
        setClickedIcon(iconName);
        
        setTimeout(() => {
            setClickedIcon("");
        }, 500);
    }

    /* page navigation */

    function handlePreviousPage() {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    }
    function handleNextPage(totalPages: number) {
        if (pageNumber < totalPages) {
            setPageNumber(pageNumber + 1);
        }
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

    return <LayoutContext 
            value={{
                clickedIcon, handleClickedIcon, 
                query, submittedQuery, setSubmittedQuery, 
                pageNumber, handlePreviousPage, handleNextPage,
                handleSearch, handleResetSearch ,
                favorites, handleAddFavorite, handleRemoveFavorite,
                isGrid, onToggleLayout
            }}>
            {props.children}
            </LayoutContext>
}