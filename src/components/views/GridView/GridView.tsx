import styles from "./GridView.module.css";
import MediaCard from "../../cards/MediaCard/MediaCard";
import FavoriteButton from "../../buttons/FavoriteButton/FavoriteButton";

// Temp placeholder
function TempItem() {
    return (
        <li>
            <MediaCard view="grid"/>
            <FavoriteButton view="grid"/>
        </li>
    )
}

export default function GridView() {
    return (
        <div className={styles["grid-view"]}>
            <TempItem />
        </div>
    )
}