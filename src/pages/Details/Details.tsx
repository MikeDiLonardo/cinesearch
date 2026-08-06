import { useNavigate } from "react-router-dom";
import MediaItem from "../../components/cards/MediaItem/MediaItem"
import FavoriteIcon from "../../components/icons/FavoriteIcon"
import BackArrowIcon from "../../components/icons/BackArrowIcon";
import styles from "./Details.module.css";

export default function Details() {
    const navigate = useNavigate();

    return (
        <div className={styles["details"]}>
            <button onClick={() => navigate(-1)} className={styles["icon-wrapper"]} aria-label="Go Back">
                <BackArrowIcon className={`icon ${styles["icon--back-arrow"]}`} width={32} height={32} strokeWidth={1.25} />
            </button>
            <section className={styles["details__header"]}>
                    <MediaItem view="details" className={styles["media-cover"]} />

                    <div className={styles["details__info"]}>
                        <h2>Hell House LLC</h2>
                        <p><time dateTime="2019">2019</time> - Directed by Stephen Cognetti</p>
                        <p><time dateTime="PT96M">96 mins</time></p>
                        <div className="rating">
                            <FavoriteIcon width={18} height={18} className={styles.rating} strokeWidth={1}/>
                            <FavoriteIcon width={18} height={18} className={styles.rating} strokeWidth={1}/>
                            <FavoriteIcon width={18} height={18} className={styles.rating} strokeWidth={1}/>
                            <FavoriteIcon width={18} height={18} className={styles.rating} strokeWidth={1}/>
                            <FavoriteIcon width={18} height={18} className={styles.rating} strokeWidth={1}/>
                        </div>
                        <ul className={styles.genre}>
                            <li>Horror</li>
                            <li>Mystery</li>
                            <li>Thriller</li>
                            <li>Supernatural</li>
                            <li>Found Footage</li>
                        </ul>
                    </div>

            </section>
            <section className="details__summary">
                <h3>New York's Scariest Haunted House Tour</h3>
                <p>Five years after 15 people died on a Halloween attraction's opening night, a documentary crew uncovers footage revealing the truth. The tapes follow a haunt team into the abandoned Abaddon Hotel, documenting their descent from eerie technical glitches into a violent, supernatural massacre. This raw evidence proves the "malfunction" in the basement was something far more sinister.</p>
            </section>
            <section className="details__cast-crew">
                <h3>Cast</h3>
                <h3>Crew</h3>
            </section>
        </div>
    )    
}