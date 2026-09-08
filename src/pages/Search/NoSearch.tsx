import styles from "./NoSearch.module.css";

export default function NoSearch() {
    return (
        <div className={styles.container}>
            <h1>Search</h1>                    
            <p className="text--base-rg">
                Your search results will appear here <br />
                Click the input above to get started.
            </p>
        </div>                
    )    
}