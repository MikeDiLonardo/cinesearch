import MediaItem from "../../cards/MediaItem/MediaItem";
import styles from "./GridView.module.css";
import { apiFetcher } from "../../../utils/apiFetcher";
import { useSuspenseQuery } from "@tanstack/react-query";
import type { TMDBResponse } from "../../../types/tmbd-response";

export default function GridView() {
    const { data: movies } = useSuspenseQuery<TMDBResponse>({
        queryKey: ["movies"],
        queryFn: () => apiFetcher("get", "3/trending/movie/day"),
    });
    console.log(movies);

    return (        
            <ul className={styles["grid-view"]}>
                {movies.results.map(movie => <MediaItem view="grid" key={movie.id} poster={movie.poster_path}/>)}
            </ul>
    )
}