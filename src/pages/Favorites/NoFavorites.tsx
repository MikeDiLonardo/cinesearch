import styles from "./NoFavorites.module.css";

export default function NoFavorites() {
    return (
        <div className={styles.container}>
            <h1>Favorites</h1>                    
            <p className="text--base-rg">
                You haven't saved any favorites yet! <br />
                Click the star icon on any movie to get started.
            </p>
        </div>                
    )    
}