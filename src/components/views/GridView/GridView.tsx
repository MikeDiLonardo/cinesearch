import type { View } from "../../../types/view";
import { useContext } from "react"
import { LayoutContext } from "../../layout/Layout/Context/LayoutContext";
import useTrendingMovies from "../../../hooks/useTrending";
import MediaItem from "../../cards/MediaItem/MediaItem";
import NoFavorites from "../../../pages/Favorites/NoFavorites";
import styles from "./GridView.module.css";

export default function GridView({page, person}: View) {
    const movies = useTrendingMovies()
    const context = useContext(LayoutContext);

    if (!context) return null;
    const {favorites} = context;

    if (page === "home") {
        return (
            <ul className={styles["grid-view"]}>
                {movies.map(movie => (
                    <MediaItem movie={movie} view="grid" image={movie.poster_path} key={movie.id}/>
                ))}
            </ul>    
        )
    } else if (page === "favorites") {
        if (favorites.length > 0) {
            return (
                <ul className={styles["grid-view"]}>
                    {favorites.map(favorite => (
                        <MediaItem movie={favorite} view="grid" image={favorite.poster_path} key={favorite.id}/>
                    ))}
                </ul>  
            )            
        } else {
            return (
                <NoFavorites />
            )
        }
    } else {
        return (<>
            <h2>As Cast</h2>
            <ul className={styles["grid-view"]}>
                {person.movie_credits.cast.map(movie => (
                    <MediaItem movie={movie} view="grid" image={movie.poster_path} key={movie.id}/>
                ))}
            </ul>
            <h2>As Crew</h2>
            <ul className={styles["grid-view"]}>
                {person.movie_credits.crew.map(movie => (
                    <MediaItem movie={movie} view="grid" image={movie.poster_path} key={movie.id}/>
                ))}
            </ul>
        </>)
    }
}