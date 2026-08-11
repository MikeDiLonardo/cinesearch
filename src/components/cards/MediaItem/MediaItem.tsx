import type {MediaItem} from "../../../types/media-item";
import FavoriteIcon from "../../icons/FavoriteIcon";
import styles from "./MediaItem.module.css";

export default function MediaItem({ view, shape }: MediaItem) {
    if (view === "grid") {
        return (
            <li className={styles["grid-item"]}>
                <div className={`${styles.thumbnail} ${styles.rectangle} ${styles.grid}`}></div>
              
                <button className={`${styles["favorite-icon-wrapper"]} ${styles.grid}`}>
                    <FavoriteIcon className={styles["favorite-icon"]} width={48} height={48}/>
                </button>
            </li>            
        )
    } else if (view === "list") {
        return (
            <li className={styles["list-item"]}>
                <div className={styles.info}>
                    <div className={`${styles.thumbnail} ${styles.rectangle} ${styles.list}`}></div>
                     
                    <div>
                        <p className={`${styles.title} text--base-sb`}>Title</p>
                        <p className={`${styles.year} text--xs-lt`}>Year - Directed By <span className={`${styles.director} text--xs-sb`}>Name</span></p>
                    </div>
                </div>
                <button className={styles["favorite-icon-wrapper"]}>
                    <FavoriteIcon className={styles["favorite-icon"]} width={48} height={48}/>
                </button>
            </li>            
        )
    } else if (view === "details") {
        return (
            <div className={`${styles["details-item"]}`}>
                <div className={`${styles.thumbnail} ${styles[`${shape}`]} ${styles.details}`}></div>

            { shape === "rectangle" ? (
                <button className={`${styles["favorite-icon-wrapper"]} ${styles.details}`}>
                    <FavoriteIcon className={styles["favorite-icon"]} width={48} height={48}/>
                </button>
            ) : null }
            </div>
        )
    } else {
        return <div className={`${styles.thumbnail} ${styles.rectangle} ${styles.credits}`}></div>
    }
}