import styles from "./ListView.module.css";
import MediaItem from "../../cards/MediaItem/MediaItem";

export default function ListView() {
    return(
        <div className={styles["list-view"]}>
            <ul className={styles["list-view__list"]}>
                <MediaItem view="list" />
                <MediaItem view="list" />
                <MediaItem view="list" />
                <MediaItem view="list" />
                <MediaItem view="list" />
                <MediaItem view="list" />
            </ul>
        </div>
    )
}