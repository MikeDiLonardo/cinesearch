import { Link } from "react-router-dom";
import useTrendingMovies from "../../../hooks/useTrending";
import { useContext } from "react"
import { LayoutContext } from "../../layout/Layout/Context/LayoutContext";
import MediaItem from "../../cards/MediaItem/MediaItem";
import styles from "./GridView.module.css";

export default function GridView({page}: {page: string}) {
    const movies = useTrendingMovies()
    const context = useContext(LayoutContext);
    if (!context) return null;
    const {favorites} = context;

    console.log(movies)

    if (page === "home") {
        return (
            <ul className={styles["grid-view"]}>
                {movies.map(movie => (
                    <Link to={`/details/${movie.id}`} key={movie.id}>
                        <MediaItem movie={movie} view="grid" image={movie.poster_path}/>
                    </Link>
                ))}
            </ul>    
        )
    } else {
        return (
            <ul className={styles["grid-view"]}>
                {favorites.map(favorite => (
                    <Link to={`/details/${favorite.id}`} key={favorite.id}>
                        <MediaItem movie={favorite} view="grid" image={favorite.poster_path}/>
                    </Link>
                ))}
            </ul>  
        )
    } 
}