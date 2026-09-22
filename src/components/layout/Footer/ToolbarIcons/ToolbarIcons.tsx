import type { ToolbarIcon } from "../../../../types/toolbar-icon";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { LayoutContext } from "../../Layout/Context/LayoutContext";
import styles from "./ToolbarIcons.module.css";

export default function ToolbarIcons({ navlink, name, label, onClick , width, height, strokeWidth, stroke, IconComponent, to }: ToolbarIcon) {
    const context = useContext(LayoutContext)!;
    const { clickedIcon } = context;
    
    return (<>
        {navlink ? 
            <NavLink
                className={({ isActive }) =>
                    `${`${styles["toolbar-icon-wrapper"]} ${styles[`${name}-icon-wrapper`]}`} ${isActive ? styles.active : "" }`
                }
                to={to}
                aria-label={label}
                onClick={onClick}
            > 
                <IconComponent 
                    className={`${styles.icon} ${styles[`${name}-icon`]} ${clickedIcon === `${name}` ? "clicked-icon" : ""}`} 
                    width={width} 
                    height={height}                    
                    strokeWidth={strokeWidth} 
                    stroke={stroke}
                />
            </NavLink>                
        :
            <button
                className={`${styles["toolbar-icon-wrapper"]} ${styles[`${name}-icon-wrapper`]}`} 
                aria-label={label}
                onClick={onClick}
            > 
                <IconComponent 
                    className={`${styles.icon} ${styles[`${name}-icon`]} ${clickedIcon === `${name}` ? "clicked-icon" : ""}`} 
                    width={width} 
                    height={height} 
                    strokeWidth={strokeWidth} 
                />
            </button>
        }
    </>)

}