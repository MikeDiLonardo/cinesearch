import { LayoutProvider } from "../../Layout/Context/LayoutProvider";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";
import styles from "./BaseLayout.module.css";

export default function BaseLayout() {
    return (
        <LayoutProvider>
            <div className={styles["layout-container"]}>
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </LayoutProvider>
    )
}