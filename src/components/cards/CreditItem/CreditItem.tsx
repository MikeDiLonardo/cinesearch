import type { CreditItem } from "../../../types/credit-item";
import { Link } from "react-router-dom";
import MediaItem from "../MediaItem/MediaItem";
import styles from "./CreditItem.module.css";

export default function CreditItem({ id, name, image, role }: CreditItem) {
    return (
        <div className={styles["credit-item"]}>
            <Link to={`/credits/${id}`}>
                <MediaItem view="details" shape="square" image={image} />
            </Link>
            <div className={styles["credit-name-role"]}>
                <Link to={`/credits/${id}`}>
                    <p className={`${styles["credit-name"]} text--base-rg`}>{name}</p>
                </Link>
                <p className={`${styles["credit-role"]} text--xs-lt`}>{role}</p>
            </div>
        </div>
    )    
}