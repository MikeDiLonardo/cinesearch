import type { View } from "../../../types/view";
import MediaItem from "../../cards/MediaItem/MediaItem";
import NoFavorites from "../../../pages/Favorites/NoFavorites";
import NoSearch from "../../../pages/Search/NoSearch/NoSearch";
import NoResults from "../../../pages/Search/NoResults/NoResults";
import styles from "./ListView.module.css";

export default function ListView({page, movies, query, currentPage, totalPages}: View) {
    if (page === "home") {
        return (
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
        )    
    } else if (page === "search") {
        if (query && movies.length === 0) {
            return (
                <NoResults />
            )              
        } else if (query) {
            return (
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
                    <li>{currentPage}{totalPages}</li>
                </ul>                
            )
        } else {
            return (
                <NoSearch />
            )            
        }
    } else if (page === "favorites") {
        if (movies.length > 0) {
            return (
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
            )   
        } else {
            return (
                <NoFavorites />
            )
        }
    } else {
        return (
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
        )
    }
}