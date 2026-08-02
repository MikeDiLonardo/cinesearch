import styles from "./Toolbar.module.css";
import HomeIcon from "../../icons/HomeIcon";
import FunnelIcon from "../../icons/FunnelIcon";
import SearchIcon from "../../icons/SearchIcon";
import GridIcon from "../../icons/GridIcon";
// import ListIcon from "../../icons/ListIcon";
import FavoriteIcon from "../../icons/FavoriteIcon";
import { Link } from "react-router-dom";


export default function Toolbar() {
    return (
        <div className={styles.toolbar}>
            <Link className={`${styles["icon-wrapper"]} ${styles.active}`} to="/">
                <HomeIcon className={`${styles["toolbar__icon"]} ${styles["toolbar__home"]}`} width={50} height={50} strokeWidth={1.25} />            
            </Link>
            <button className={`${styles["icon-wrapper"]}`}>
                <FunnelIcon className={`${styles["toolbar__icon"]} ${styles["toolbar__funnel"]}`} width={50} height={50} strokeWidth={1.25} />
            </button>
            <Link className={`${styles["icon-wrapper"]}`} to="/search">
                <SearchIcon className={`${styles["toolbar__icon"]} ${styles["toolbar__search"]}`} width={50} height={50} strokeWidth={1.25} />            
            </Link>
            <button className={`${styles["icon-wrapper"]}`}>
                <GridIcon className={`${styles["toolbar__icon"]} ${styles["toolbar__grid"]}`} width={50} height={50} strokeWidth={1.25} />
            </button>
            <Link className={`${styles["icon-wrapper"]}`} to="/favorites">
                <FavoriteIcon className={`${styles["toolbar__icon"]} ${styles["toolbar__favorite"]}`} width={50} height={50} strokeWidth={1.25} />
            </Link>
        </div>
    )
}