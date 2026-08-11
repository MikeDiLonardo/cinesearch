import MediaItem from "../../cards/MediaItem/MediaItem";
import styles from "./ListView.module.css";

export default function ListView() {
    return(
            <ul className={styles["list-view"]}>
                <MediaItem view="list" />
                <MediaItem view="list" />
                <MediaItem view="list" />
                <MediaItem view="list" />
                <MediaItem view="list" />
                <MediaItem view="list" />
            </ul>
    )
}