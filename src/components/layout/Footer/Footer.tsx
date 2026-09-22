import { useContext } from "react";
import { LayoutContext } from "../Layout/Context/LayoutContext";
import Toolbar from "./Toolbar/Toolbar";
import styles from "./Footer.module.css";

export default function Footer()  {
    const context = useContext(LayoutContext)!;
    const { isLargeScreen } = context;    

    return (
        <div className={`${styles.footer} ${isLargeScreen ? styles["hide-footer"] : "" }`}>
            <Toolbar />
        </div>
    )
}