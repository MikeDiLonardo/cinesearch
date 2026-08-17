import { useId } from "react";
import SearchIcon from "../../icons/SearchIcon"
import ClearIcon from "../../icons/ClearIcon"
import InfoIcon from "../../icons/InfoIcon";
import styles from "./Header.module.css";

export default function Header({ openModal }: { openModal: () => void}) {
    const searchId = useId();

    return (
        <div className={styles.header}>
            <div className={styles["search-container"]}>
                <SearchIcon className={styles["search-icon"]} width={20} height={20} strokeWidth={2}/>
                <label htmlFor={searchId}>
                    <input className={styles.search} type="text" placeholder="Search..." id={searchId}/>
                </label>
                <ClearIcon className={styles["clear-icon"]} width={20} height={20} strokeWidth={2}/>
            </div>
            <button className={styles["info-icon-wrapper"]} onClick={openModal}>
                <InfoIcon className={styles["info-icon"]} width={32} height={32} strokeWidth={1.25} />
            </button>              
        </div>
    )
}