import FavoriteIcon from "../../icons/FavoriteIcon";
import styles from "./FavoriteButton.module.css";
import type { ViewMode } from "../../../types/media-card-display";

export default function FavoriteButton({ className, view }: ViewMode) {
    return (
        <button className={`${styles["favorite-button"]} ${styles[view as keyof typeof styles]} ${className}`}>
                <FavoriteIcon className={`${styles["favorite-button__icon"]} ${styles["fav-icon"]}`} width={24} height={23}/>
        </button>
    )
}