import TmdbLogo from "../../../icons/TmdbLogo";
import styles from "./TmdbCredit.module.css";

export default function TmdbCredit() {
    return (
        <div>
        <div className={styles["tmdb-credit"]}>
            <TmdbLogo className="tmdb-logo" width={118} height={85} fill="var(--stroke-light)" />
            <p className="text--sm-rg">
                This product uses the TMDB API but<br />
                is not endorsed or certified by TMDB.
            </p>
        </div>  
        </div>
    )
}