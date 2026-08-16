import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";
import styles from "./BaseLayout.module.css";

export default function BaseLayout() {
    const [isGrid, setIsGrid] = useState(true);

    function onToggleLayout() {
        setIsGrid(!isGrid)
    }

    return (
        <div className={styles["layout-container"]}>
            <main>
                <Outlet context={{ isGrid }} />
            </main>
            <Footer isGrid={isGrid} onToggleLayout={onToggleLayout} />
        </div>
    )
}