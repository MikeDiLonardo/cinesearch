import { Link } from "react-router-dom";
import useTrendingMovies from "../../../hooks/useTrending";
import MediaItem from "../../cards/MediaItem/MediaItem";
import styles from "./GridView.module.css";

export default function GridView() {
    const movies = useTrendingMovies()
    console.log(movies)

    return (        
        <ul className={styles["grid-view"]}>
            {movies.map(movie => (
                <Link to={`/details/${movie.id}`} key={movie.id}>
                    <MediaItem view="grid" image={movie.poster_path}/>
                </Link>
            ))}
        </ul>
    )
}