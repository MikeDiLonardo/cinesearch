import MediaCard from "../MediaCard/MediaCard";
import FavoriteButton from "../../buttons/FavoriteButton/FavoriteButton";
import styles from "./MediaItem.module.css";


export default function MediaItem({ view }: {view: "grid" | "list"}) {
    if (view === "grid") {
        return (
            <li className={styles["grid-view__item"]}>
                <MediaCard view={view}/>
                <FavoriteButton className={styles["grid-view__fav-btn"]} view={view}/>
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
                <FavoriteButton className={styles["list-view__fav-btn"]} view={view}/>
            </li>            
        )
    }
}