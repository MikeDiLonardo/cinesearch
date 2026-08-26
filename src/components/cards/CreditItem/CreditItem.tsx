import type { Credit } from "../../../types/credit";
import MediaItem from "../MediaItem/MediaItem";
import styles from "./CreditItem.module.css";

export default function CreditItem({index, name, image, role}: Credit) {
    return (
        <div className={styles["credit-item"]}>
            <MediaItem index={index} view="details" shape="square" image={image} />
            <div className={styles["credit-name-role"]}>
                <p className={`${styles["credit-name"]} text--base-rg`}>{name}</p>
                <p className={`${styles["credit-role"]} text--xs-lt`}>{role}</p>
            </div>
        </div>
    )    
}