import FavoriteButton from "../../buttons/FavoriteButton/FavoriteButton";
import MediaCard from "../../cards/MediaCard/MediaCard";
import styles from "./ListView.module.css";

// Temp placeholder
function TempListItem() {
    return (
        <li className={styles["list-view__item"]}>
            <div className={styles["list-view__mediacard-info"]}>
                <MediaCard view="list" />
                <div>
                    <p>Title</p>
                    <p>Year - Directed By <span>Name</span></p>
                </div>
            </div>
            <FavoriteButton className={styles["list-view__fav-btn"]} view="list"/>
        </li>
    )
}

export default function ListView() {
    return(
        <div className={styles["list-view"]}>
            <ul className={styles["list-view__list"]}>
                <TempListItem />
                <TempListItem />
                <TempListItem />
                <TempListItem />
                <TempListItem />
                <TempListItem />
            </ul>
        </div>
    )
}