import FavoriteIcon from "../../icons/FavoriteIcon";
import type {MediaItem} from "../../../types/media-item";
import styles from "./MediaItem.module.css";

export default function MediaItem({ view, shape, className }: MediaItem) {
    if (view === "grid") {
        return (
            <li className={styles["grid-view"]}>
                <div className={`${styles["thumbnail-rectangle"]} ${styles.grid}`}></div>
              
                <button className={`${styles["favorite-icon-wrapper"]} ${styles.grid}`}>
                    <FavoriteIcon className={styles["favorite-icon"]} width={24} height={23}/>
                </button>
            </li>            
        )
    } else if (view === "list") {
        return (
            <li className={styles["list-view"]}>
                <div className={styles.info}>
                    <div className={`${styles["thumbnail-rectangle"]} ${styles.list}`}></div>
                     
                    <div>
                        <p className={`${styles.title} text--base-sb`}>Title</p>
                        <p className={`${styles.year} text--xs-lt`}>Year - Directed By <span className={`${styles.director} text--xs-sb`}>Name</span></p>
                    </div>
                </div>
                <button className={styles["favorite-icon-wrapper"]}>
                    <FavoriteIcon className={styles["favorite-icon"]} width={24} height={23}/>
                </button>
            </li>            
        )
    } else {
        return (
            <div className={`${styles["details-view"]} ${className}`}>
                <div className={`${styles[`thumbnail-${shape}`]} ${styles.details}`}></div>
            </div>
        )
    }
}