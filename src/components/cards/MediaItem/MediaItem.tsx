import FavoriteIcon from "../../icons/FavoriteIcon";
import styles from "./MediaItem.module.css";

export default function MediaItem({ view }: {view: "grid" | "list"}) {
    if (view === "grid") {
        return (
            <li className={styles["grid-view"]}>
                <div className={`${styles["media-thumbnail"]} ${styles.grid}`}></div>
              
                <button className={`${styles["favorite-wrapper"]} ${styles.grid}`}>
                    <FavoriteIcon className={styles["favorite-icon"]} width={24} height={23}/>
                </button>
            </li>            
        )
    } else {
        return (
            <li className={styles["list-view"]}>
                <div className={styles["list-view__card"]}>
                    <div className={`${styles["media-thumbnail"]} ${styles.list}`}></div>
                     
                    <div className="media-info">
                        <p className={`${styles["list-view__title"]} text--base-sb`}>Title</p>
                        <p className={`${styles["list-view__year"]} text--xs-lt`}>Year - Directed By <span className={`${styles["list-view__director"]} text--xs-sb`}>Name</span></p>
                    </div>
                </div>
                <button className={styles["favorite-wrapper"]}>
                    <FavoriteIcon className={styles["favorite-icon"]} width={24} height={23}/>
                </button>
            </li>            
        )
    }
}