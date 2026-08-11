import MediaItem from "../../cards/MediaItem/MediaItem";
import styles from "./GridView.module.css";

export default function GridView() {
    return (
            <ul className={styles["grid-view"]}>
                <MediaItem view="grid"/>
                <MediaItem view="grid"/>
                <MediaItem view="grid"/>
                <MediaItem view="grid"/>
                <MediaItem view="grid"/>
                <MediaItem view="grid"/>
                <MediaItem view="grid"/>
                <MediaItem view="grid"/>
                <MediaItem view="grid"/>
                <MediaItem view="grid"/>
                <MediaItem view="grid"/>
                <MediaItem view="grid"/>
            </ul>
    )
}