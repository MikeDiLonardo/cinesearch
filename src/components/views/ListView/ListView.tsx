import { Link } from "react-router-dom";
import { useContext } from "react"
import { LayoutContext } from "../../layout/Layout/Context/LayoutContext";
import useTrendingMovies from "../../../hooks/useTrending";
import MediaItem from "../../cards/MediaItem/MediaItem";
import NoFavorites from "../../../pages/Favorites/NoFavorites";
import styles from "./ListView.module.css";

export default function ListView({page}: {page: string}) {
    const movies = useTrendingMovies()
    const context = useContext(LayoutContext);
    if (!context) return null;
    const {favorites} = context;
    
    console.log(movies)

    if (page === "home") {
        return(
            <ul className={styles["list-view"]}>
                {movies.map(movie => (
                    <Link to={`/details/${movie.id}`} key={movie.id}>
                        <MediaItem movie={movie} view="list" image={movie.poster_path} title={movie.title} releaseDate={movie.release_date} voteAverage={movie.vote_average} />
                    </Link>
                ))}
            </ul>
        )    
    } else {
        if (favorites.length > 0) {
            return(
                <ul className={styles["list-view"]}>
                    {favorites.map(favorite => (
                        <Link to={`/details/${favorite.id}`} key={favorite.id}>
                            <MediaItem movie={favorite} view="list" image={favorite.poster_path} title={favorite.title} releaseDate={favorite.release_date} voteAverage={favorite.vote_average} />
                        </Link>
                    ))}
                </ul>
            )   
        } else {
            return (
                <NoFavorites />
            )
        }
    }
}