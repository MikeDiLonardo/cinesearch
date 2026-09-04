import type { Movie } from "../../../types/movie";
import { useContext } from "react"
import { LayoutContext } from "../../layout/Layout/Context/LayoutContext";
import FavoriteIcon from "../../icons/FavoriteIcon"
import styles from "./FavoriteButton.module.css"

export default function FavoriteButton({ movie, view }: {movie: Movie | undefined, view: string}) {
    const context = useContext(LayoutContext);
    if (!context) return null;
    const { favorites, handleAddFavorite, handleRemoveFavorite } = context;
    if (!movie) return null;

    return (
        <button 
            className={`${styles["favorite-icon-wrapper"]} ${styles[`${view}`]}`} 
            onClick={(event) => {
                event.preventDefault();
                if (favorites.find(favorite => favorite.id === movie.id)) {
                    handleRemoveFavorite(movie);
                } else {
                    handleAddFavorite(movie);
                }
            }} 
            aria-label="Toggle favorite"
        >
            <FavoriteIcon 
                className={styles["favorite-icon"]} 
                width={48} 
                height={48}
                fill={favorites.find(favorite => favorite.id === movie.id) ? "var(--favorite)" : "none"}
                />
        </button>
    )    
}
