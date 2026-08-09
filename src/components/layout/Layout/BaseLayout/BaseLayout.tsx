import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";
import styles from "./BaseLayout.module.css";

export default function BaseLayout() {
    return (
        <div className={styles["layout-container"]}>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}