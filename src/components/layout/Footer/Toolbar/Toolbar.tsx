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
            <Link className={`${styles["icon-wrapper"]} ${styles.active}`} to="/">
                <HomeIcon className={`${styles["toolbar__icon"]} ${styles["icon--home"]}`} width={28} height={28} strokeWidth={1.25} />            
            </Link>
            <Link className={`${styles["icon-wrapper"]}`} to="/search">
                <SearchIcon className={`${styles["toolbar__icon"]} ${styles["icon--search"]}`} width={28} height={28} strokeWidth={1.25} />            
            </Link>
            <Link className={`${styles["icon-wrapper"]}`} to="/favorites">
                <FavoriteIcon className={`${styles["toolbar__icon"]} ${styles["icon--favorite"]}`} width={28} height={28} strokeWidth={1.25} />
            </Link>            
            <button className={`${styles["icon-wrapper"]}`}>
                <FunnelIcon className={`${styles["toolbar__icon"]} ${styles["icon--funnel"]}`} width={28} height={28} strokeWidth={1.25} />
            </button>            
            <button className={`${styles["icon-wrapper"]}`}>
                <GridIcon className={`${styles["toolbar__icon"]} ${styles["icon--grid"]}`} width={28} height={28} strokeWidth={1.25} />
            </button>
        </div>
    )
}