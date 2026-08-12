import BackButton from "../../../buttons/BackButton/BackButton";
import styles from "./CreditsDetailsLayout.module.css";

export default function CreditsDetailsLayout({ page, children }: {page: "credits" | "details", children: React.ReactNode}) {
    return (
        <div className={styles[page]}>
            <BackButton />
            {children}
        </div>
    )
}