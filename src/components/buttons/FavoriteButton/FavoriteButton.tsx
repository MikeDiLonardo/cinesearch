import { useState, useContext } from "react"
import { LayoutContext } from "../../layout/Layout/Context/LayoutContext";
import FavoriteIcon from "../../icons/FavoriteIcon"
import styles from "./FavoriteButton.module.css"

export default function FavoriteButton({ view }: {view: string}) {
    const [isFilled, setIsFilled] = useState(false);
    const context = useContext(LayoutContext);
    if (!context) return null;
    const { clickedIcon, handleClickedIcon } = context;

    function handleIsFilled() {
        setIsFilled(!isFilled);
    }

    return (
        <button 
            className={`${styles["favorite-icon-wrapper"]} ${styles[`${view}`]} ${clickedIcon === "favorite" ? "clicked" : ""}`} 
            onClick={() => {
                handleIsFilled();
                handleClickedIcon("favorite")                
            }} 
            aria-label="Toggle favorite"
        >
            <FavoriteIcon 
                className={styles["favorite-icon"]} 
                width={48} 
                height={48}
                fill={isFilled ? "var(--favorite)" : "none"}
                />
        </button>
    )    
}