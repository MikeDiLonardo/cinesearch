import { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../../../icons/HomeIcon";
import FunnelIcon from "../../../icons/FunnelIcon";
import SearchIcon from "../../../icons/SearchIcon";
import GridIcon from "../../../icons/GridIcon";
import ListIcon from "../../../icons/ListIcon";
import FavoriteIcon from "../../../icons/FavoriteIcon";
import styles from "./Toolbar.module.css";


export default function Toolbar() {
    const [isGrid, setIsGrid] = useState(true)

    function handleOnClick() {
        setIsGrid(!isGrid)
    }

    return (
        <div className={styles.toolbar}>
            <Link className={`${styles["toolbar-icon-wrapper"]} ${styles.active}`} to="/" aria-label="Go to Home">
                <HomeIcon className={`${styles.icon} ${styles["home-icon"]}`} width={28} height={28} strokeWidth={1.25} />            
            </Link>
            <Link className={`${styles["toolbar-icon-wrapper"]}`} to="/search" aria-label="Go to Search">
                <SearchIcon className={`${styles.icon} ${styles["search-icon"]}`} width={28} height={28} strokeWidth={1.25} />            
            </Link>
            <Link className={`${styles["toolbar-icon-wrapper"]}`} to="/favorites" aria-label="Go to Favorites">
                <FavoriteIcon className={`${styles.icon} ${styles["favorite-icon"]}`} width={28} height={28} strokeWidth={1.25} stroke="currentColor" />
            </Link>            
            <button className={`${styles["toolbar-icon-wrapper"]}`} aria-label="Toggle Filter">
                <FunnelIcon className={`${styles.icon} ${styles["funnel-icon"]}`} width={28} height={28} strokeWidth={1.25} />
            </button>            
            <button className={`${styles["toolbar-icon-wrapper"]}`} onClick={handleOnClick} aria-label="Toggle Layout">
                {isGrid ? <GridIcon className={`${styles.icon} ${styles["grid-icon"]}`} width={28} height={28} strokeWidth={1.25} />
                : <ListIcon className={`${styles.icon} ${styles["list-icon"]}`} width={28} height={28} strokeWidth={1.25} />
                }
            </button>
        </div>
    )
}