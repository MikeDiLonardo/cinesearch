import MediaItem from "../../components/cards/MediaItem/MediaItem"
import CreditItem from "../../components/cards/CastCrewItem/CreditItem";
import FavoriteIcon from "../../components/icons/FavoriteIcon"
import BackButton from "../../components/buttons/BackButton/BackButton";
import styles from "./Details.module.css";

export default function Details() {
    return (
        <div className={styles.details}>
            <BackButton />
            <section className={styles.header}>
                    <MediaItem view="details" shape="rectangle" />

                    <div className={styles.info}>
                        <h2 className={`${styles.title} text--md-sb`}>Hell House LLC</h2>
                        <p className={`${styles.year} text--xs-lt`}><time dateTime="2019">2019</time></p>
                        <div>
                            <p className={`${styles["directed-by"]} text--xs-lt`}>Directed by</p>
                            <p className={`${styles.director} text--xs-sb`}>Stephen Cognetti</p>
                        </div>
                        <p className={`${styles.duration} text--xs-lt`}><time dateTime="PT96M">96 mins</time></p>
                        <div className={styles.rating}>
                            <FavoriteIcon width={18} height={18} className={styles.star} fill="var(--favorite)" strokeWidth={1}/>
                            <FavoriteIcon width={18} height={18} className={styles.star} fill="var(--favorite)" strokeWidth={1}/>
                            <FavoriteIcon width={18} height={18} className={styles.star} fill="var(--favorite)" strokeWidth={1}/>
                            <FavoriteIcon width={18} height={18} className={styles.star} fill="var(--favorite)" strokeWidth={1}/>
                            <FavoriteIcon width={18} height={18} className={styles.star} strokeWidth={1}/>
                        </div>
                        <ul className={`${styles.genres} text--xs-lt`}>
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
            <section className={styles["credit"]}>
                <h3 className={styles["credit-heading"]}>Cast</h3>
                <div className={styles.cast}>
                    <ul className={styles["cast-info"]}>
                        <CreditItem />
                        <CreditItem />
                        <CreditItem />
                        <CreditItem />
                    </ul>
                </div>
                <h3 className={styles["credit-heading"]}>Crew</h3>
                <div className={styles.crew}>
                    <ul className={styles["crew-info"]}>
                        <CreditItem />
                        <CreditItem />
                        <CreditItem />
                        <CreditItem />
                        <CreditItem />
                    </ul>
                </div>
            </section>
        </div>
    )    
}