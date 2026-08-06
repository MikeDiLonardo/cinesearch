import MediaItem from "../../cards/MediaItem/MediaItem";
import styles from "./ListView.module.css";

export default function ListView() {
    return(
        <div className={styles["list-view"]}>
            <ul className={styles.list}>
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