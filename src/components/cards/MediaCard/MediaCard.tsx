import styles from "./MediaCard.module.css";
import type { ViewMode } from "../../../types/media-card-display";

export default function MediaCard({ className = "", view }: ViewMode) {
    return (
        <div className="media-card">
            <div className={`${styles["media-card__placeholder"]} ${styles[view as keyof typeof styles]} ${className}`}></div>
        </div>
    )
}