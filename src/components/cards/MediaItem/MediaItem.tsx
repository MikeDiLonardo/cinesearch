import MediaCard from "../MediaCard/MediaCard";
import FavoriteIcon from "../../icons/FavoriteIcon";
import styles from "./MediaItem.module.css";

export default function MediaItem({ view }: {view: "grid" | "list"}) {
    if (view === "grid") {
        return (
            <li className={styles["grid-view__item"]}>
                <MediaCard view={view}/>

                <button className={`${styles["favorite-wrapper"]} ${styles[view as keyof typeof styles]}`}>
                    <FavoriteIcon className={styles["favorite-icon"]} width={24} height={23}/>
                </button>
            </li>            
        )
    } else {
        return (
            <li className={styles["list-view__item"]}>
                <div className={styles["list-view__mediacard"]}>
                    <MediaCard view={view} />
                    <div className="list-view__mediacard-info">
                        <p className={`${styles["list-view__title"]} text--base-sb`}>Title</p>
                        <p className={`${styles["list-view__year"]} text--xs-lt`}>Year - Directed By <span className={`${styles["list-view__director"]} text--xs-sb`}>Name</span></p>
                    </div>
                </div>
                <button>
                    <FavoriteIcon className={styles["favorite-icon"]} width={24} height={23}/>
                </button>
            </li>            
        )
    }
}