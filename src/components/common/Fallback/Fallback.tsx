import styles from "./Fallback.module.css"

export default function Fallback({title, subtitle}: {title: string, subtitle: string}) {
    return (
        <div className={styles.container}>
            <h1>{title}</h1>
            <p className="text--base-rg">{subtitle}</p>
        </div>
    )
}