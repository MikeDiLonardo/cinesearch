import styles from "./Header.module.css";
import SearchIcon from "../../icons/SearchIcon"
import ClearIcon from "../../icons/ClearIcon"

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles["header__search-container"]}>
                <SearchIcon className={styles["icon--search"]} width={20} height={20} />
                <input type="text" placeholder="Search..." />
                <ClearIcon className={styles["icon--clear"]} width={18} height={18} />
            </div>
        </div>
    )
}