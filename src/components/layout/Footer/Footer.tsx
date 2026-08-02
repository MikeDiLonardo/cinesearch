import styles from "./Footer.module.css";
import Toolbar from "../Toolbar/Toolbar";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <Toolbar />
        </div>
    )
}