import styles from "./ErrorBoundaryFallback.module.css"

export default function ErrorBoundaryFallback() {
    return (
        <div className={styles.container}>
            <h1>An error occured</h1>
            <p className="text--base-rg">Please try again later</p>
        </div>
    )
}
