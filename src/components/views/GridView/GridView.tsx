import useTrendingMovies from "../../../hooks/useTrendingMovies";
import MediaItem from "../../cards/MediaItem/MediaItem";
import styles from "./GridView.module.css";

export default function GridView() {
    const movies = useTrendingMovies()
    console.log(movies)

    return (        
        <ul className={styles["grid-view"]}>
            {movies.map(movie => <MediaItem view="grid" key={movie.id} image={movie.poster_path}/>)}
        </ul>
    )
}