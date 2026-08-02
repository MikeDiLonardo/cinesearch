import styles from "./Toolbar.module.css";
import HomeIcon from "../../icons/HomeIcon";
import FunnelIcon from "../../icons/FunnelIcon";
import SearchIcon from "../../icons/SearchIcon";
import GridIcon from "../../icons/GridIcon";
// import ListIcon from "../../icons/ListIcon";
import FavoriteIcon from "../../icons/FavoriteIcon";


export default function Toolbar() {
    return (
        <div className={styles.toolbar}>
            <HomeIcon className={`${styles["toolbar__icon"]} ${styles["toolbar__home"]}`} width={48} height={48} strokeWidth={1.25} />
            <FunnelIcon className={`${styles["toolbar__icon"]} ${styles["toolbar__funnel"]}`} width={48} height={48} strokeWidth={1.25} />
            <SearchIcon className={`${styles["toolbar__icon"]} ${styles["toolbar__search"]}`} width={48} height={48} strokeWidth={1.25} />
            <GridIcon className={`${styles["toolbar__icon"]} ${styles["toolbar__grid"]}`} width={48} height={48} strokeWidth={1.25} />
            <FavoriteIcon className={`${styles["toolbar__icon"]} ${styles["toolbar__favorite"]}`} width={48} height={48} strokeWidth={1.25} />
        </div>
    )
}