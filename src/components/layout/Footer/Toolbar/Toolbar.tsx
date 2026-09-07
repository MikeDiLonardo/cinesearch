import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { LayoutContext } from "../../Layout/Context/LayoutContext";
import HomeIcon from "../../../icons/HomeIcon";
import FunnelIcon from "../../../icons/FunnelIcon";
import SearchIcon from "../../../icons/SearchIcon";
import GridIcon from "../../../icons/GridIcon";
import ListIcon from "../../../icons/ListIcon";
import FavoriteIcon from "../../../icons/FavoriteIcon";
import styles from "./Toolbar.module.css";

export default function Toolbar(){
    const context = useContext(LayoutContext)!;
    const { clickedIcon, isGrid, handleClickedIcon, onToggleLayout } = context;

    return (
        <div className={styles.toolbar}>
            <NavLink
                className={({ isActive }) =>
                    `${styles["toolbar-icon-wrapper"]} ${isActive ? styles.active : "" }`
                }
                to="/"
                aria-label="Go to Home"
                onClick={() => handleClickedIcon("home")}
            > 
                <HomeIcon 
                    className={`${styles.icon} ${styles["home-icon"]} ${clickedIcon === "home" ? "clicked-icon" : ""}`} 
                    width={28} 
                    height={28} 
                    strokeWidth={1.25} />
            </NavLink>

            <NavLink
                className={({ isActive }) =>
                    `${styles["toolbar-icon-wrapper"]} ${isActive ? styles.active : "" }`
                }
                to="/search"
                aria-label="Go to Search"
                onClick={() => handleClickedIcon("search")}
            > 
                <SearchIcon 
                    className={`${styles.icon} ${styles["search-icon"]} ${clickedIcon === "search" ? "clicked-icon" : ""}`} 
                    width={28} 
                    height={28} 
                    strokeWidth={1.25} />
            </NavLink>

            <NavLink
                className={({ isActive }) =>
                    `${styles["toolbar-icon-wrapper"]} ${isActive ? styles.active : "" }`
                }
                to="/favorites"
                aria-label="Go to Favorites"
                onClick={() => handleClickedIcon("favorites")}
            > 
                <FavoriteIcon 
                    className={`${styles.icon} ${styles["favorite-icon"]} ${clickedIcon === "favorites" ? "clicked-icon" : ""}`} 
                    width={28} 
                    height={28} 
                    strokeWidth={1.25} 
                    stroke="currentColor" />
            </NavLink>

            <button 
                className={`${styles["toolbar-icon-wrapper"]}`} 
                aria-label="Toggle Filter"
                onClick={() => handleClickedIcon("funnel")}
            >
                <FunnelIcon 
                    className={`${styles.icon} ${styles["funnel-icon"]} ${clickedIcon === "funnel" ? "clicked-icon" : ""}`} 
                    width={28} 
                    height={28} 
                    strokeWidth={1.25} />
            </button>            
            <button 
                className={`${styles["toolbar-icon-wrapper"]}`} 
                onClick={() => {
                    onToggleLayout();
                    handleClickedIcon("view");
                }} 
                aria-label="Toggle Layout"
            >
                {isGrid ? 
                  <GridIcon 
                    className={`${styles.icon} ${styles["grid-icon"]} ${clickedIcon === "view" ? "clicked-icon" : ""}`} 
                    width={28} 
                    height={28} 
                    strokeWidth={1.25} />
                : 
                  <ListIcon 
                    className={`${styles.icon} ${styles["list-icon"]} ${clickedIcon === "view" ? "clicked-icon" : ""}`} 
                    width={28} 
                    height={28} 
                    strokeWidth={1.25} />
                }
            </button>
        </div>
    )
}