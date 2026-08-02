import TmdbLogo from "../../icons/TmdbLogo";
import styles from "./TmdbCredit.module.css";

export default function TmdbCredit() {
    return (
        <div className={styles["tmdb-credit"]}>
            <TmdbLogo className="tmdb-logo" width={131} height={17} />
            <div>
                <p className="text--xxxs-sb">
                    This product uses the TMDB API but<br />
                    is not endorsed or certified by TMDB.
                </p>
            </div>
        </div>  
    )
}