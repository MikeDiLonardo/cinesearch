import styles from "./GridView.module.css";
import MediaItem from "../../cards/MediaItem/MediaItem";

export default function GridView() {
    return (
        <div className={styles["grid-view"]}>
            <ul className={styles["grid-view__list"]}>
                <MediaItem view="grid"/>
                <MediaItem view="grid"/>
                <MediaItem view="grid"/>
                <MediaItem view="grid"/>
                <MediaItem view="grid"/>
                <MediaItem view="grid"/>

            </ul>
        </div>
    )
}