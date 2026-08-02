import styles from "./Header.module.css";
import SearchIcon from "../../icons/SearchIcon"
import ClearIcon from "../../icons/ClearIcon"
import {useId} from "react";

export default function Header() {
    const searchId = useId();

    return (
        <div className={styles.header}>
            <div className={styles["header__search-container"]}>
                <SearchIcon className={styles["icon--search"]} width={20} height={20} strokeWidth={2}/>
                <label htmlFor={searchId}>
                    <input className={styles["header__search"]} type="text" placeholder="Search..." id={searchId}/>
                </label>
                <ClearIcon className={styles["icon--clear"]} width={18} height={18} strokeWidth={2}/>
            </div>
        </div>
    )
}