import { useNavigate } from "react-router-dom";
import BackIcon from "../../icons/BackIcon";
import styles from "./BackButton.module.css";

export default function BackButton() {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)} className={styles["back-icon-wrapper"]} aria-label="Go Back">
            <BackIcon className={styles["back-icon"]} width={32} height={32} strokeWidth={1.25} />
        </button>
    )    
}