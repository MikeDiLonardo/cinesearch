import type { View } from "../../../types/view";
import { useContext } from "react"
import { LayoutContext } from "../../layout/Layout/Context/LayoutContext";
import useTrendingMovies from "../../../hooks/useTrending";
import MediaItem from "../../cards/MediaItem/MediaItem";
import NoFavorites from "../../../pages/Favorites/NoFavorites";
import styles from "./ListView.module.css";

export default function ListView({page, person}: View) {
    const movies = useTrendingMovies()
    const context = useContext(LayoutContext);

    if (!context) return null;
    const {favorites} = context;

    if (page === "home") {
        return(
            <ul className={styles["list-view"]}>
                {movies.map(movie => (
                    <MediaItem movie={movie} view="list" image={movie.poster_path} title={movie.title} releaseDate={movie.release_date} voteAverage={movie.vote_average} key={movie.id}/>
                ))}
            </ul>
        )    
    } else if (page === "favorites") {
        if (favorites.length > 0) {
            return(
                <ul className={styles["list-view"]}>
                    {favorites.map(favorite => (
                        <MediaItem movie={favorite} view="list" image={favorite.poster_path} title={favorite.title} releaseDate={favorite.release_date} voteAverage={favorite.vote_average} key={favorite.id}/>
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
                {person.movie_credits.cast.map(movie => (
                    <MediaItem movie={movie} view="list" image={movie.poster_path} title={movie.title} releaseDate={movie.release_date} voteAverage={movie.vote_average} key={movie.id}/>
                ))}
            </ul>           
        )
    }
}