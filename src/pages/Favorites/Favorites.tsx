import { useContext, useEffect } from "react";
import { LayoutContext } from "../../components/layout/Layout/Context/LayoutContext";
import GridView from "../../components/views/GridView";
import ListView from "../../components/views/ListView";

export default function Favorites() {
    const context = useContext(LayoutContext)!;
    const { isLargeScreen, handleIsLargeScreen, favorites, setPageNumberFavorites, pageNumberFavorites, isGrid } = context;

    const startIndex = (pageNumberFavorites - 1) * 18;
    const endIndex = startIndex + 18
    const movies = favorites.slice(startIndex, endIndex);
    const currentPage = pageNumberFavorites
    const totalPages = Math.ceil(favorites.length / 18) || 1;

    useEffect(() => {
        if (isLargeScreen) {
            handleIsLargeScreen();
        }
    }, [isLargeScreen, handleIsLargeScreen])    

    useEffect(() => {
        if (currentPage > totalPages) {
            setPageNumberFavorites(totalPages);
        }
    }, [favorites.length, currentPage, totalPages, setPageNumberFavorites]);

    return (
        <div className="favorites">
            {isGrid ? 
                <GridView page="favorites" movies={movies} currentPage={currentPage} totalPages={totalPages}/> 
                : 
                <ListView page="favorites" movies={movies} currentPage={currentPage} totalPages={totalPages}/>
            }
        </div>
    )    
}