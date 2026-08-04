import {useId} from "react";
import SearchIcon from "../../icons/SearchIcon"
import ClearIcon from "../../icons/ClearIcon"
import InfoIcon from "../../icons/InfoIcon";
import styles from "./Header.module.css";

export default function Header() {
    const searchId = useId();

    return (
        <div className={styles.header}>
            <div className={styles["header__search-container"]}>
                <SearchIcon className={styles["icon--search"]} width={20} height={20} strokeWidth={2}/>
                <label htmlFor={searchId}>
                    <input className={styles["header__search"]} type="text" placeholder="Search..." id={searchId}/>
                </label>
                <ClearIcon className={styles["icon--clear"]} width={20} height={20} strokeWidth={2}/>
            </div>
            <button className={styles["icon-wrapper"]}>
                <InfoIcon className={styles["icon--info"]} width={32} height={32} strokeWidth={1.25} />
            </button>              
        </div>
    )
}