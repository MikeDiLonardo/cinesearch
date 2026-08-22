import type {MediaItem} from "../../../types/media-item";
import FavoriteButton from "../../buttons/FavoriteButton/FavoriteButton";
import styles from "./MediaItem.module.css";

export default function MediaItem({ view, shape, image }: MediaItem) {
    const isMovie = shape === "rectangle"; 

    if (view === "grid") {
        return (
            <li className={styles["grid-item"]}>
                <img className={`${styles.thumbnail} ${styles.rectangle} ${styles.grid}`}
                    src={`https://image.tmdb.org/t/p/w500/${image}`}
                    alt="Movie Poster"                
                />
                <FavoriteButton view="grid" />
            </li>            
        )
    } else if (view === "list") {
        return (
            <li className={styles["list-item"]}>
                <div className={styles.info}>
                    <img className={`${styles.thumbnail} ${styles.rectangle} ${styles.list}`}
                        src={`https://image.tmdb.org/t/p/w500/${image}`}
                        alt="Movie Poster"   
                    />
                    <div>
                        <p className={`${styles.title} text--base-sb`}>Title</p>
                        <p className={`${styles.year} text--xs-lt`}>Year - Directed By <span className={`${styles.director} text--xs-sb`}>Name</span></p>
                    </div>
                </div>
                <FavoriteButton view="list" />
            </li>            
        )
    } else if (view === "details") {
        return (
            <div className={`${styles["details-item"]}`}>
                <img className={`${styles.thumbnail} ${styles[`${shape}`]} ${styles.details}`}
                    src={`https://image.tmdb.org/t/p/w500/${image}`}
                    alt={ isMovie ? "Movie Poster" : "Credit Photo" }
                />
                { isMovie ? <FavoriteButton view="details" /> : null }
            </div>
        )
    } else {
        return (
            <img className={`${styles.thumbnail} ${styles.rectangle} ${styles.credits}`}
                src={`https://image.tmdb.org/t/p/w500/${image}`} 
                alt="Credit Photo"  
            />
        )
    }
}