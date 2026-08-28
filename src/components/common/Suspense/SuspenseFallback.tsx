import styles from "./SuspenseFallback.module.css";

export default function SuspenseFallback() {
    return (
        <div className={styles.container}>
            <h1>Loading<span className={styles.dot}>.</span><span className={styles.dot}>.</span><span className={styles.dot}>.</span></h1>
        </div>
    )
}