import type { View } from "../../../types/view";
import { useContext } from "react";
import { LayoutContext } from "../../layout/Layout/Context/LayoutContext";
import MediaItem from "../../cards/MediaItem/MediaItem";
import NoFavorites from "../../../pages/Favorites/NoFavorites";
import NoSearch from "../../../pages/Search/NoSearch";
import NoResults from "../../../pages/Search/NoResults";
import styles from "./ListView.module.css";

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
            <div className={styles.container}>
                <ul className={styles["list-view"]}>
                    {movies.slice(0, 18).map(movie => (
                        <MediaItem 
                            movie={movie} 
                            view="list" 
                            image={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "/movie-photo-placeholder.svg"}
                            title={movie.title} 
                            releaseDate={movie.release_date} 
                            voteAverage={movie.vote_average} 
                            key={movie.id}
                        />
                    ))}
                </ul>
                <div className={styles.pages}>  
                    <button onClick={handlePreviousPageHome}>Prev</button>
                    {currentPage} of {totalPages}
                    <button onClick={() => handleNextPageHome(totalPages)}>Next</button>
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
                    <ul className={styles["list-view"]}>
                        {movies.slice(0, 18).map(movie => (
                            <MediaItem 
                                movie={movie} 
                                view="list" 
                                image={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "/movie-photo-placeholder.svg"}
                                title={movie.title} 
                                releaseDate={movie.release_date} 
                                voteAverage={movie.vote_average}                             
                                key={movie.id}
                            />
                        ))}
                    </ul>
                    <div className={styles.pages}>  
                        <button onClick={handlePreviousPageSearch}>Prev</button>
                        {currentPage} of {totalPages}
                        <button onClick={() => handleNextPageSearch(totalPages)}>Next</button>
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
                    <ul className={styles["list-view"]}>
                        {movies.slice(0, 18).map(movie => (
                            <MediaItem 
                                movie={movie} 
                                view="list" 
                                image={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "/movie-photo-placeholder.svg"}
                                title={movie.title} 
                                releaseDate={movie.release_date} 
                                voteAverage={movie.vote_average} 
                                key={movie.id}
                            />
                        ))}
                    </ul>
                    <div className={styles.pages}>  
                        <button onClick={handlePreviousPageFavorites}>Prev</button>
                        {currentPage} of {totalPages}
                        <button onClick={() => handleNextPageFavorites(totalPages)}>Next</button>
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
                <ul className={styles["list-view"]}>
                    {movies.slice(0, 18).map(movie => (
                        <MediaItem 
                            movie={movie} 
                            view="list" 
                            image={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "/movie-photo-placeholder.svg"}
                            title={movie.title}
                            releaseDate={movie.release_date}
                            voteAverage={movie.vote_average}
                            key={movie.id}
                        />
                    ))}            
                </ul>
                <div className={styles.pages}>  
                    <button onClick={handlePreviousPageCredits}>Prev</button>
                    {currentPage} of {totalPages}
                    <button onClick={() => handleNextPageCredits(totalPages)}>Next</button>
                </div>                
            </div>           
        )
    }
}