import type { View } from "../../../types/view";
import { useContext } from "react"
import { LayoutContext } from "../../layout/Layout/Context/LayoutContext";
import MediaItem from "../../cards/MediaItem/MediaItem";
import NoFavorites from "../../../pages/Favorites/NoFavorites";
import styles from "./ListView.module.css";

export default function ListView({page, movies}: View) {
    const context = useContext(LayoutContext);
    if (!context) return null;

    if (page === "home") {
        return (
            <ul className={styles["list-view"]}>
                {movies.map(movie => (
                    <MediaItem movie={movie} view="list" image={movie.poster_path} title={movie.title} releaseDate={movie.release_date} voteAverage={movie.vote_average} key={movie.id}/>
                ))}
            </ul>
        )    
    } else if (page === "favorites") {
        if (movies.length > 0) {
            return (
                <ul className={styles["list-view"]}>
                    {movies.map(movie => (
                        <MediaItem movie={movie} view="list" image={movie.poster_path} title={movie.title} releaseDate={movie.release_date} voteAverage={movie.vote_average} key={movie.id}/>
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
                {movies.map(movie => (
                    <MediaItem movie={movie} view="grid" image={movie.poster_path ? movie.poster_path : "/movie-photo-placeholder.svg"} key={movie.id}/>
                ))}            
            </ul>           
        )
    }
}