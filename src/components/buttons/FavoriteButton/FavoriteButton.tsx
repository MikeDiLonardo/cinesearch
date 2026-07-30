import FavIcon from "../../icons/FavIcon";
import styles from "./FavoriteButton.module.css";
import type { MediaCardDisplay } from "../../../types/media-card-display";

export default function FavoriteButton({ className, view }: MediaCardDisplay) {
    return (
        <button className={`${styles["favorite-button"]} ${styles[view as keyof typeof styles]} ${className}`}>
            <div className={styles["favorite-button__icon"]}>
                <FavIcon className="fav-icon" width={24} height={23}/>
            </div>
        </button>
    )
}