import styles from "./Footer.module.css";
import TmdbLogo from "../../icons/TmdbLogo";

export default function Footer() {
    return (
        <div className={styles.footer}>
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