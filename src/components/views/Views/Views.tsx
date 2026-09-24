import type { Views } from "../../../types/views";
import MediaItem from "../../cards/MediaItem/MediaItem";
import styles from "./Views.module.css";

export default function Views({view, credits, movies, handlePrevious, handleNext, currentPage, totalPages}: Views) {
    if (view === "grid") {
        return (
            <div className={styles["grid-container"]}>
                <ul className={`${styles["grid-view"]} ${credits ? styles.credits : ""}`}>
                    {movies.slice(0, 18).map(movie => (
                        <MediaItem 
                            movie={movie} 
                            view="grid" 
                            image={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "movie-photo-placeholder.svg"}
                            key={movie.id}
                        />
                    ))}
                </ul>   
                <div className={`${styles.pages} ${credits ? styles.credits : ""}`}>  
                    <button onClick={handlePrevious}>Prev</button>
                    {currentPage} of {totalPages}
                    <button onClick={() => handleNext(totalPages)}>Next</button>
                </div>
            </div>        
        )
    } else {
        return (
            <div className={styles["list-container"]}>
                <ul className={`${styles["list-view"]} ${credits ? styles.credits : ""}`}>
                    {movies.slice(0, 18).map(movie => (
                        <MediaItem 
                            movie={movie} 
                            view="list" 
                            image={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "movie-photo-placeholder.svg"}
                            title={movie.title} 
                            releaseDate={movie.release_date} 
                            voteAverage={movie.vote_average} 
                            key={movie.id}
                        />
                    ))}
                </ul>
                <div className={`${styles.pages} ${credits ? styles.credits : ""}`}>  
                    <button onClick={handlePrevious}>Prev</button>
                    {currentPage} of {totalPages}
                    <button onClick={() => handleNext(totalPages)}>Next</button>
                </div>
            </div>                   
        )
    }

}