import type { View } from "../../types/view";
import { useContext } from "react";
import { LayoutContext } from "../layout/Layout/Context/LayoutContext";
import Views from "./Views/Views";
import NoFavorites from "../../pages/Favorites/NoFavorites";
import NoSearch from "../../pages/Search/NoSearch";
import NoResults from "../../pages/Search/NoResults";


export default function ListView({page, movies, query, currentPage, totalPages}: View) {
    const context = useContext(LayoutContext)!;
    const { handlePreviousPageHome, handleNextPageHome, handlePreviousPageSearch, handleNextPageSearch, handlePreviousPageFavorites, handleNextPageFavorites, handlePreviousPageCredits, handleNextPageCredits, sortBy } = context;

    if (sortBy === "a-z") {
        [...movies] = movies.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "z-a"){
        [...movies] = movies.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortBy === "newest") {
        [...movies] = movies.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime()); // .getTime() to convert to number
    } else if (sortBy === "oldest") {
        [...movies] = movies.sort((a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime());
    } else if (sortBy === "rated") {
        [...movies] = movies.sort((a, b) => b.vote_average - a.vote_average);
    } else {
        [...movies] = movies.sort((a, b) => b.popularity - a.popularity);
    } 
        
    if (page === "home") {
        return (
            <Views 
                view="list" 
                credits={false} 
                movies={movies} 
                handlePrevious={handlePreviousPageHome} 
                handleNext={handleNextPageHome} 
                currentPage={currentPage} 
                totalPages={totalPages} 
            />
        )    
    } else if (page === "search") {
        if (query && movies.length === 0) {
            return (
                <NoResults />
            )              
        } else if (query) {
            return (
                <Views 
                    view="list" 
                    credits={false} 
                    movies={movies} 
                    handlePrevious={handlePreviousPageSearch} 
                    handleNext={handleNextPageSearch} 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                />                        
            )
        } else {
            return (
                <NoSearch />
            )            
        }
    } else if (page === "favorites") {
        if (movies.length > 0) {
            return (
                <Views 
                    view="list" 
                    credits={false} 
                    movies={movies} 
                    handlePrevious={handlePreviousPageFavorites} 
                    handleNext={handleNextPageFavorites} 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                />              
            )   
        } else {
            return (
                <NoFavorites />
            )
        }
    } else {
        return (
            <Views 
                view="list" 
                credits={true} 
                movies={movies} 
                handlePrevious={handlePreviousPageCredits} 
                handleNext={handleNextPageCredits} 
                currentPage={currentPage} 
                totalPages={totalPages} 
            />         
        )
    }
}