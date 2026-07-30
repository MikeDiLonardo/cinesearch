import styles from "./GridView.module.css";
import MediaCard from "../../cards/MediaCard/MediaCard";
import FavoriteButton from "../../buttons/FavoriteButton/FavoriteButton";

// Temp placeholder
function TempGridItem() {
    return (
        <li className={styles["grid-view__item"]}>
            <MediaCard view="grid"/>
            <FavoriteButton className={styles["grid-view__fav-btn"]} view="grid"/>
        </li>
    )
}

export default function GridView() {
    return (
        <div className={styles["grid-view"]}>
            <ul className={styles["grid-view__list"]}>
                <TempGridItem />
                <TempGridItem />
                <TempGridItem />
                <TempGridItem />
                <TempGridItem />
                <TempGridItem />
                <TempGridItem />
                <TempGridItem />
                <TempGridItem />
                <TempGridItem />
                <TempGridItem />
                <TempGridItem />
            </ul>
        </div>
    )
}