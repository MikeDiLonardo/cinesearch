import type { Movie } from "../../../../types/movie";
import { useState, useEffect } from "react";
import { LayoutContext } from "./LayoutContext";

export function LayoutProvider(props: {children: React.ReactNode}) {
    const [clickedIcon, setClickedIcon] = useState("");
    const [favorites, setFavorites] = useState<Movie[]>(JSON.parse(localStorage.getItem("favorites") || "[]"));
    const [isGrid, setIsGrid] = useState(true);
    const [query, setQuery] = useState("");    
    const [submittedQuery, setSubmittedQuery] = useState("");    
    const [pageNumberHome, setPageNumberHome] = useState(1);
    const [pageNumberSearch, setPageNumberSearch] = useState(1);
    const [pageNumberFavorites, setPageNumberFavorites] = useState(1);
    const [pageNumberCredits, setPageNumberCredits] = useState(1);
    const [isFunnelOpen, setIsFunnelOpen] = useState(false);
    const [sortBy, setSortBy] = useState("newest");

    /* clicked toolbar icons */

    function handleClickedIcon(iconName: string) {
        setClickedIcon(iconName);
        
        setTimeout(() => {
            setClickedIcon("");
        }, 500);
    }

    /* page navigation */

    function handlePreviousPageHome() {
        if (pageNumberHome > 1) {
            setPageNumberHome(pageNumberHome - 1);
        }
    }
    function handleNextPageHome(totalPages: number) {
        if (pageNumberHome < totalPages) {
            setPageNumberHome(pageNumberHome + 1);
        }
    }

    function handlePreviousPageSearch() {
        if (pageNumberSearch > 1) {
            setPageNumberSearch(pageNumberSearch - 1);
        }
    }
    function handleNextPageSearch(totalPages: number) {
        if (pageNumberSearch < totalPages) {
            setPageNumberSearch(pageNumberSearch + 1);
        }
    }

    function handlePreviousPageFavorites() {
        if (pageNumberFavorites > 1) {
            setPageNumberFavorites(pageNumberFavorites - 1);
        }
    }
    function handleNextPageFavorites(totalPages: number) {
        if (pageNumberFavorites < totalPages) {
            setPageNumberFavorites(pageNumberFavorites + 1);
        }
    }

    function handlePreviousPageCredits() {
        if (pageNumberCredits > 1) {
            setPageNumberCredits(pageNumberCredits - 1);
        }
    }
    function handleNextPageCredits(totalPages: number) {
        if (pageNumberCredits < totalPages) {
            setPageNumberCredits(pageNumberCredits + 1);
        }
    }
    
    /* search */

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        setQuery(event.target.value);
    }

    function handleResetSearch() {
        setQuery("");
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

    /* funnel */
    
    function handleIsFunnelOpen() {
        setIsFunnelOpen(!isFunnelOpen);
    }

    function handleFunnelSelect(event: React.ChangeEvent<HTMLSelectElement>) {
        setSortBy(event.target.value);
    }

    /* grid / list switch */

    function onToggleLayout() {
        setIsGrid(!isGrid)
    }

    return <LayoutContext 
            value={{
                clickedIcon, handleClickedIcon, 
                query, submittedQuery, setSubmittedQuery, 
                pageNumberHome, handlePreviousPageHome, handleNextPageHome,
                pageNumberSearch, handlePreviousPageSearch, handleNextPageSearch,
                pageNumberFavorites, handlePreviousPageFavorites, handleNextPageFavorites,
                pageNumberCredits, handlePreviousPageCredits, handleNextPageCredits,
                handleSearch, handleResetSearch ,
                favorites, handleAddFavorite, handleRemoveFavorite,
                isFunnelOpen, handleIsFunnelOpen,
                sortBy, handleFunnelSelect,
                isGrid, onToggleLayout
            }}>
            {props.children}
            </LayoutContext>
}