import type { View } from "../../../types/view";
import { useContext } from "react";
import { LayoutContext } from "../../layout/Layout/Context/LayoutContext";
import MediaItem from "../../cards/MediaItem/MediaItem";
import NoFavorites from "../../../pages/Favorites/NoFavorites";
import NoSearch from "../../../pages/Search/NoSearch/NoSearch";
import NoResults from "../../../pages/Search/NoResults/NoResults";
import styles from "./GridView.module.css";

export default function GridView({page, movies, query, currentPage, totalPages}: View) {
    const context = useContext(LayoutContext)!;
    const { handlePreviousPage, handleNextPage } = context;
    
    if (page === "home") {
        return (
            <div className={styles.container}>
                <ul className={styles["grid-view"]}>
                    {movies.slice(0, 18).map(movie => (
                        <MediaItem 
                            movie={movie} 
                            view="grid" 
                            image={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "/movie-photo-placeholder.svg"}
                            key={movie.id}
                        />
                    ))}
                </ul>   
                <div className={styles.pages}>  
                    <button onClick={handlePreviousPage}>Prev</button>
                    {currentPage} of {totalPages}
                    <button onClick={() => handleNextPage(totalPages)}>Next</button>
                </div>
            </div>
        )
    } else if (page === "search") {
        if (query && movies.length === 0) {
            return (
                <NoResults />
            )              
        } else if (query) {
            return (
                <div className={styles.container}>
                    <ul className={styles["grid-view"]}>
                        {movies.slice(0, 18).map(movie => (
                            <MediaItem 
                                movie={movie} 
                                view="grid" 
                                image={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "/movie-photo-placeholder.svg"}
                                key={movie.id}
                            />
                        ))}
                    </ul>              
                    <div className={styles.pages}>  
                        <button onClick={handlePreviousPage}>Prev</button>
                        {currentPage} of {totalPages}
                        <button onClick={() => handleNextPage(totalPages)}>Next</button>
                    </div>
                </div>
            )
        } else {
            return (
                <NoSearch />
            )            
        }
    } else if (page === "favorites") {
        if (movies.length > 0) {
            return (
                <div className={styles.container}>
                    <ul className={styles["grid-view"]}>
                        {movies.slice(0, 18).map(movie => (
                            <MediaItem 
                                movie={movie} 
                                view="grid" 
                                image={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "/movie-photo-placeholder.svg"} 
                                key={movie.id}
                            />
                        ))}
                    </ul>
                    <div className={styles.pages}>  
                        <button onClick={handlePreviousPage}>Prev</button>
                        {currentPage} of {totalPages}
                        <button onClick={() => handleNextPage(totalPages)}>Next</button>
                    </div>
                </div>
            )            
        } else {
            return (
                <NoFavorites />
            )
        }
    } else {
        return (
            <div className={styles.container}>
                <ul className={styles["grid-view"]}>
                    {movies.slice(0, 18).map(movie => (
                        <MediaItem 
                            movie={movie} 
                            view="grid" 
                            image={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "/movie-photo-placeholder.svg"} 
                            key={movie.id}
                        />
                    ))}          
                </ul>
                <div className={styles.pages}>  
                    <button onClick={handlePreviousPage}>Prev</button>
                    {currentPage} of {totalPages}
                    <button onClick={() => handleNextPage(totalPages)}>Next</button>
                </div>                
            </div>
        )
    }
}

