import MediaItem from "../MediaItem/MediaItem";
import styles from "./CreditItem.module.css";

export default function CreditItem() {
    return (
        <li className={styles["credit-item"]}>
            <MediaItem view="details" shape="square" />
            <div>
                <p className={`${styles["credit-name"]} text--base-rg`}>Danny Bellini</p>
                <p className={`${styles["credit-role"]} text--xs-lt`}>Alex Taylor</p>
            </div>
        </li>        
    )    
}