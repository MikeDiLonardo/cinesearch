import styles from "./NoResults.module.css";

export default function NoResults() {
    return (
        <div className={styles.container}>
            <h1>No Results</h1>                    
            <p className="text--base-rg">
                We couldn't find any matches. <br />
                Please search another title.
            </p>
        </div>                
    )    
}