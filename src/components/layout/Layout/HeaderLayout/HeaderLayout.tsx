import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";
import styles from "./HeaderLayout.module.css"

export default function HeaderLayout() {
    return (<>
        <Header />
        <div className={styles["feed-container"]}>
            <Outlet />
        </div>
    </>)
}