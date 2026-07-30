import styles from "./MediaCard.module.css";
import type { MediaCardDisplay } from "../../../types/media-card-display";

export default function MediaCard({ className, view }: MediaCardDisplay) {
    return (
        <div className="media-card">
            <div className={`${styles["media-card__placeholder"]} ${styles[view as keyof typeof styles]}`}></div>
        </div>
    )
}