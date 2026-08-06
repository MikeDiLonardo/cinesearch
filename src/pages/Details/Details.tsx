import { useNavigate } from "react-router-dom";
import MediaItem from "../../components/cards/MediaItem/MediaItem"
import FavoriteIcon from "../../components/icons/FavoriteIcon"
import BackIcon from "../../components/icons/BackIcon";
import styles from "./Details.module.css";

export default function Details() {
    const navigate = useNavigate();

    return (
        <div className={styles.details}>
            <button onClick={() => navigate(-1)} className={styles["back-icon-wrapper"]} aria-label="Go Back">
                <BackIcon className={styles["back-icon"]} width={32} height={32} strokeWidth={1.25} />
            </button>
            <section className={styles.header}>
                    <MediaItem view="details" className={styles["media-cover"]} shape="rectangle" />

                    <div className={styles.info}>
                        <h2 className={`${styles.title} text--md-sb`}>Hell House LLC</h2>

                        <p className={`${styles["year-director"]} text--xs-lt`}><time dateTime="2019">2019</time> - Directed by <span className="text--xs-sb">Stephen Cognetti</span></p>

                        <p className={`${styles.duration} text--xs-lt`}><time dateTime="PT96M">96 mins</time></p>

                        <div className={styles.rating}>
                            <FavoriteIcon width={18} height={18} className={styles.star} strokeWidth={1}/>
                            <FavoriteIcon width={18} height={18} className={styles.star} strokeWidth={1}/>
                            <FavoriteIcon width={18} height={18} className={styles.star} strokeWidth={1}/>
                            <FavoriteIcon width={18} height={18} className={styles.star} strokeWidth={1}/>
                            <FavoriteIcon width={18} height={18} className={styles.star} strokeWidth={1}/>
                        </div>
                        <ul className={`${styles.genre} text--xs-lt`}>
                            <li>Horror</li>
                            <li>Mystery</li>
                            <li>Thriller</li>
                            <li>Supernatural</li>
                            <li>Found Footage</li>
                        </ul>
                    </div>
            </section>
            <section className={styles["headline-summary"]}>
                <h3 className={`${styles.headline} text--base-sb`}>New York's Scariest Haunted House Tour</h3>
                <p className={`${styles.summary} text--xs-rg`}>Five years after 15 people died on a Halloween attraction's opening night, a documentary crew uncovers footage revealing the truth. The tapes follow a haunt team into the abandoned Abaddon Hotel, documenting their descent from eerie technical glitches into a violent, supernatural massacre. This raw evidence proves the "malfunction" in the basement was something far more sinister.</p>
            </section>
            <section className={styles["cast-crew"]}>
                <h3 className={styles.cast}>Cast</h3>
                <MediaItem view="details" className="" shape="square" />
                <p className={styles.actor}>Danny Bellini</p>
                <p className={styles.role}>Alex Taylor</p>
                <h3 className={styles.crew}>Crew</h3>
            </section>
        </div>
    )    
}