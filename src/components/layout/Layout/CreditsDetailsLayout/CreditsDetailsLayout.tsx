import type { CreditsDetailsLayout } from "../../../../types/credits-details-layout";
import BackButton from "../../../buttons/BackButton/BackButton";
import styles from "./CreditsDetailsLayout.module.css";

export default function CreditsDetailsLayout({ page, children }: CreditsDetailsLayout) {
    return (
        <div className={styles[page]}>
            <div className={styles["back-button"]}>
                <BackButton />
            </div>
            {children}
        </div>
    )
}