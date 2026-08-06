import { Link } from "react-router-dom";
import HomeIcon from "../../../icons/HomeIcon";
import FunnelIcon from "../../../icons/FunnelIcon";
import SearchIcon from "../../../icons/SearchIcon";
import GridIcon from "../../../icons/GridIcon";
import FavoriteIcon from "../../../icons/FavoriteIcon";
import styles from "./Toolbar.module.css";


export default function Toolbar() {
    return (
        <div className={styles.toolbar}>
            <Link className={`${styles["toolbar-icon-wrapper"]} ${styles.active}`} to="/" aria-label="Home">
                <HomeIcon className={`${styles.icon} ${styles["home-icon"]}`} width={28} height={28} strokeWidth={1.25} />            
            </Link>
            <Link className={`${styles["toolbar-icon-wrapper"]}`} to="/search" aria-label="Search">
                <SearchIcon className={`${styles.icon} ${styles["search-icon"]}`} width={28} height={28} strokeWidth={1.25} />            
            </Link>
            <Link className={`${styles["toolbar-icon-wrapper"]}`} to="/favorites" aria-label="Favorites">
                <FavoriteIcon className={`${styles.icon} ${styles["favorite-icon"]}`} width={28} height={28} strokeWidth={1.25} stroke="currentColor" />
            </Link>            
            <button className={`${styles["toolbar-icon-wrapper"]}`} aria-label="Filter">
                <FunnelIcon className={`${styles.icon} ${styles["funnel-icon"]}`} width={28} height={28} strokeWidth={1.25} />
            </button>            
            <button className={`${styles["toolbar-icon-wrapper"]}`} aria-label="Toggle Layout">
                <GridIcon className={`${styles.icon} ${styles["grid-icon"]}`} width={28} height={28} strokeWidth={1.25} />
            </button>
        </div>
    )
}