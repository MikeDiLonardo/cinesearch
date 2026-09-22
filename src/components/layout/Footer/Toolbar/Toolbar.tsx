import { useContext, useState, useRef, useId } from "react";
import { useLocation } from "react-router-dom";
import { LayoutContext } from "../../Layout/Context/LayoutContext";
import HomeIcon from "../../../icons/HomeIcon";
import FunnelIcon from "../../../icons/FunnelIcon";
import SearchIcon from "../../../icons/SearchIcon";
import GridIcon from "../../../icons/GridIcon";
import ListIcon from "../../../icons/ListIcon";
import FavoriteIcon from "../../../icons/FavoriteIcon";
import ToolbarIcons from "../ToolbarIcons/ToolbarIcons";
import styles from "./Toolbar.module.css";

export default function Toolbar(){
    const context = useContext(LayoutContext)!;
    const { isGrid, handleClickedIcon, sortBy, handleFunnelSelect, onToggleLayout } = context;
    const id = useId();    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);
    const location = useLocation();

    function openModal() {
        if (!dialogRef.current) return;
        dialogRef.current.showModal();
        dialogRef.current.blur();
        setIsModalOpen(!isModalOpen);
    }

    function closeModal(event: React.MouseEvent<HTMLDialogElement>) {
        if (!dialogRef.current) return;
        if (event.target === dialogRef.current) {
            dialogRef.current.close()
            setIsModalOpen(!isModalOpen);            
        }
    } 

    let pageInfo: string;
    if (location.pathname === "/") {
        pageInfo = "Trending Now"
    } else if (location.pathname === "/search") {
        pageInfo = "Search Results"
    } else {
        pageInfo = "Favorites"
    }

    return (<>
        <dialog ref={dialogRef} onClick={closeModal} className={styles.modal}>
            <div /* empty div to avoid autofocus on the select dropdown on safari browser */
                tabIndex={0} 
                aria-hidden="true" 
                style={{ position: "absolute", opacity: 0 }}>
            </div>
            <div className={styles["funnel-select"]}>
                <label htmlFor={id} className="text--base-sb">Sort By:</label>
                <select id={id} onChange={handleFunnelSelect} value={sortBy}>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="popular">Popular</option>
                    <option value="rated">Rated</option>
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                </select>
            </div>
        </dialog>
        <div className={styles.toolbar}>
            
            <p className={`${styles["page-info"]} text--md-rg`}>{pageInfo}</p>

            <ToolbarIcons /* home */
                navlink={true} 
                name="home" 
                to="/" 
                label="Go to Home" 
                onClick={() => handleClickedIcon("home")} 
                width={28} 
                height={28} 
                strokeWidth={1.25}
                IconComponent={HomeIcon}
            />

            <ToolbarIcons /* search */
                navlink={true} 
                name="search" 
                to="/search" 
                label="Go to Search" 
                onClick={() => handleClickedIcon("search")} 
                width={28} 
                height={28} 
                strokeWidth={1.25}
                IconComponent={SearchIcon}
            />

            <ToolbarIcons /* favorites */
                navlink={true} 
                name="favorites" 
                to="/favorites" 
                label="Go to Favorites" 
                onClick={() => handleClickedIcon("favorites")} 
                width={28} 
                height={28} 
                strokeWidth={1.25}
                stroke="currentColor"
                IconComponent={FavoriteIcon}
            />

            <ToolbarIcons /* funnel */
                navlink={false} 
                name="funnel" 
                label="Toggle Funnel" 
                onClick={() => {
                    handleClickedIcon("funnel")
                    openModal();
                }}
                width={28} 
                height={28} 
                strokeWidth={1.25}
                IconComponent={FunnelIcon}
            />

            <div className={styles["desktop-select"]}>
                <label htmlFor={id} className="text--base-sb">Sort By: </label>
                <select id={id} onChange={handleFunnelSelect} value={sortBy}>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="popular">Popular</option>
                    <option value="rated">Rated</option>
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                </select>
            </div>            

            {isGrid ? /* grid / list */
                <ToolbarIcons 
                    navlink={false} 
                    name="grid" 
                    label="Toggle Layout" 
                    onClick={() => {
                        onToggleLayout();
                        handleClickedIcon("view");
                    }}
                    width={28} 
                    height={28} 
                    strokeWidth={1.25}
                    IconComponent={GridIcon}
                />            
            :
                <ToolbarIcons 
                    navlink={false} 
                    name="funnel" 
                    label="Toggle Layout" 
                    onClick={() => {
                        onToggleLayout();
                        handleClickedIcon("view");
                    }}
                    width={28} 
                    height={28} 
                    strokeWidth={1.25}
                    IconComponent={ListIcon}
                />                
            }
        </div>
    </>)
}