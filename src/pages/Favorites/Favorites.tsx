import { useContext } from "react";
import { LayoutContext } from "../../components/layout/Layout/Context/LayoutContext";
import GridView from "../../components/views/GridView/GridView";
import ListView from "../../components/views/ListView/ListView";

export default function Favorites() {
    const context = useContext(LayoutContext)!;
    const { favorites, isGrid, pageNumberFavorites } = context;

    const startIndex = (pageNumberFavorites - 1) * 18;
    const endIndex = startIndex + 18
    const movies = favorites.slice(startIndex, endIndex);
    const currentPage = pageNumberFavorites
    const totalPages = Math.ceil(favorites.length / 18) || 1;

    console.log(favorites)

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