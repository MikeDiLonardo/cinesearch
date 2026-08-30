import type {MediaItem} from "../../../types/media-item";
import FavoriteButton from "../../buttons/FavoriteButton/FavoriteButton";
import styles from "./MediaItem.module.css";

export default function MediaItem({ id, view, shape, image, title, releaseDate, voteAverage }: MediaItem) {
    const isMovie = shape === "rectangle"; 
    const year = releaseDate?.substring(0, 4); 
    const rating = voteAverage?.toFixed(1);

    const finalImage = image?.includes("placeholder") ? image : `https://image.tmdb.org/t/p/w500/${image}`;

    if (view === "grid") {
        return (
            <li className={styles["grid-item"]}>
                <img className={`${styles.thumbnail} ${styles.rectangle} ${styles.grid}`}
                    src={finalImage}
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
                        src={finalImage}
                        alt="Movie Poster"   
                    />
                    <div>
                        <p className={`${styles.title} text--base-sb`}>{title}</p>
                        <p className={`${styles.year} text--xs-lt`}>{year} - Rating: <span className={`${styles.rating} text--xs-sb`}>{rating}</span></p>
                    </div>
                </div>
                <FavoriteButton view="list" />
            </li>            
        )
    } else if (view === "details") {
        return (
            <div className={`${styles["details-item"]}`}>
                <img className={`${styles.thumbnail} ${styles[`${shape}`]} ${styles.details}`}
                    src={finalImage}
                    alt={ isMovie ? "Movie Poster" : "Credit Photo" }
                />
                { isMovie ? <FavoriteButton view="details" /> : null }
            </div>
        )
    } else {
        return (
            <img className={`${styles.thumbnail} ${styles.rectangle} ${styles.credits}`}
                src={finalImage} 
                alt="Credit Photo"  
            />
        )
    }
}