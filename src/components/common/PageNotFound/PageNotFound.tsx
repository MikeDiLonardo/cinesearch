import styles from "./PageNotFound.module.css";

export default function PageNotFound() {
    return (
        <div className={styles.container}>
            <h1>Page Not Found</h1>         
            <p className="text--base-rg">
                We couldn't find the page you're looking for.<br />
                Please make sure the link was typed correctly.
            </p>   
        </div>
    )
}
