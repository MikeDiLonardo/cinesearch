import { Outlet, useOutletContext } from "react-router-dom";
import Header from "../../Header/Header";
import styles from "./HeaderLayout.module.css"

export default function HeaderLayout() {
    const context = useOutletContext();

    return (<>
        <Header />
        <div className={styles["feed-container"]}>
            <Outlet context={context}/>
        </div>
    </>)
}