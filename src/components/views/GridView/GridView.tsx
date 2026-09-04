import { useContext } from "react"
import { LayoutContext } from "../../layout/Layout/Context/LayoutContext";
import { useParams } from "react-router-dom";
import useTrendingMovies from "../../../hooks/useTrending";
import usePerson from "../../../hooks/usePerson";
import MediaItem from "../../cards/MediaItem/MediaItem";
import NoFavorites from "../../../pages/Favorites/NoFavorites";
import styles from "./GridView.module.css";

export default function GridView({page}: {page: string}) {
    const movies = useTrendingMovies()
    const context = useContext(LayoutContext);

    const {id} = useParams();
    const actorId = Number.parseInt(id ?? "", 10); // ?? "" in case there's no number after credits/    
    const person = usePerson(actorId);

    if (!context) return null;
    const {favorites} = context;

    console.log(movies);
    console.log(person);

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

    }
}