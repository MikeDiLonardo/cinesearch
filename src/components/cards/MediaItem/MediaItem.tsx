import { Link } from "react-router-dom";
import type {MediaItem} from "../../../types/media-item";
import FavoriteButton from "../../buttons/FavoriteButton/FavoriteButton";
import styles from "./MediaItem.module.css";

export default function MediaItem({ movie, view, shape, image, title, releaseDate, voteAverage }: MediaItem) {
    const year = releaseDate?.substring(0, 4); 
    const rating = voteAverage?.toFixed(1);

    const finalImage = image?.includes("placeholder") ? image : `https://image.tmdb.org/t/p/w500/${image}`;

    if (view === "grid") {
        return (
            <Link to={`/details/${movie?.id}`}>        
                <li className={styles["grid-item"]}>
                    <img className={`${styles.thumbnail} ${styles.rectangle} ${styles.grid}`}
                        src={finalImage}
                        alt="Movie Poster"                
                    />
                    <FavoriteButton movie={movie} view="grid" />
                </li>            
            </Link>    
        )
    } else if (view === "list") {
        return (
            <Link to={`/details/${movie?.id}`}>            
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
                    <FavoriteButton movie={movie} view="list" />
                </li>   
            </Link>         
        )
    } else if (view === "details") {
        return (
            <div className={`${styles["details-item"]}`}>
                <img className={`${styles.thumbnail} ${styles[`${shape}`]} ${styles.details}`}
                    src={finalImage}
                    alt={ movie ? "Movie Poster" : "Credit Photo" }
                />
                { movie ? <FavoriteButton movie={movie} view="details" /> : null }
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