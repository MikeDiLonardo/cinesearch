import useTrendingMovies from "../../../hooks/useTrendingMovies";
import MediaItem from "../../cards/MediaItem/MediaItem";
import styles from "./ListView.module.css";

export default function ListView() {
    const movies = useTrendingMovies()
    console.log(movies)

    return(
        <ul className={styles["list-view"]}>
            {movies.map(movie => <MediaItem view="list" key={movie.id} image={movie.poster_path}/>)};
        </ul>
    )
}