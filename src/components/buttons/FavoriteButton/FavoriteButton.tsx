import FavoriteIcon from "../../icons/FavoriteIcon"
import styles from "./FavoriteButton.module.css"

export default function FavoriteButton({ view }: {view: string}) {
    return (
        <button className={`${styles["favorite-icon-wrapper"]} ${styles[`${view}`]}`}>
            <FavoriteIcon className={styles["favorite-icon"]} width={48} height={48}/>
        </button>
    )    
}