import type { LayoutToggle } from "../../../types/layout-toggle.ts";
import Toolbar from "./Toolbar/Toolbar";
import styles from "./Footer.module.css";

export default function Footer({ isGrid, onToggleLayout }: LayoutToggle)  {
    return (
        <div className={styles.footer}>
            <Toolbar isGrid={isGrid} onToggleLayout={onToggleLayout}/>
        </div>
    )
}