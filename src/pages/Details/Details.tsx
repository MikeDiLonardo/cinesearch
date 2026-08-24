import { useParams } from "react-router-dom";
import useCreditsDetails from "../../hooks/useCreditsDetails";
import CreditsDetailsLayout from "../../components/layout/Layout/CreditsDetailsLayout/CreditsDetailsLayout";
import MediaItem from "../../components/cards/MediaItem/MediaItem";
import CreditItem from "../../components/cards/CastCrewItem/CreditItem";
import FavoriteIcon from "../../components/icons/FavoriteIcon";
// import BackButton from "../../components/buttons/BackButton/BackButton";
import styles from "./Details.module.css";

export default function Details() {
    const {id} = useParams();    
    const movieId = Number.parseInt(id ?? "", 10); // ?? "" in case there's no number after details/
    const movie = useCreditsDetails(movieId)
    console.log(movie);
    
    const year = movie.release_date.substring(0, 4); 
    const director = movie.credits.crew.filter(person => person.job === "Director").map(person => person.name).join(", ");

    return (
        <CreditsDetailsLayout page="details">
            <div className={styles.container}>
                <section className={styles.header}>
                    <MediaItem view="details" shape="rectangle"  key={movie.id} image={movie.poster_path} />

                    <div className={styles.info}>
                        <h2 className={`${styles.title} text--md-sb`}>{movie.title}</h2>
                        <p className={`${styles.year} text--xs-lt`}><time dateTime="2019">{year}</time></p>
                        <div>
                            <p className={`${styles["directed-by"]} text--xs-lt`}>Directed by</p>
                            <p className={`${styles.director} text--xs-sb`}>{director}</p>
                        </div>
                        <p className={`${styles.duration} text--xs-lt`}><time dateTime="PT96M">{movie.runtime} mins</time></p>
                        <div className={styles.rating}>
                            <FavoriteIcon width={18} height={18} className={styles.star} fill="var(--favorite)" strokeWidth={1}/>
                            <FavoriteIcon width={18} height={18} className={styles.star} fill="var(--favorite)" strokeWidth={1}/>
                            <FavoriteIcon width={18} height={18} className={styles.star} fill="var(--favorite)" strokeWidth={1}/>
                            <FavoriteIcon width={18} height={18} className={styles.star} fill="var(--favorite)" strokeWidth={1}/>
                            <FavoriteIcon width={18} height={18} className={styles.star} strokeWidth={1}/>
                        </div>
                        <ul className={`${styles.genres} text--xs-lt`}>
                            {movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
                        </ul>
                    </div>
                </section>
                
                <section className={styles["headline-summary"]}>
                    <h3 className={`${styles.headline} text--base-sb`}>{movie.tagline}</h3>
                    <p className={`${styles.summary} text--xs-rg`}>{movie.overview}</p>
                </section>
                
                <section className={styles.credit}>
                    <h3 className={styles["credit-heading"]}>Cast</h3>
                    <ul className={styles.cast}>
                        <CreditItem />
                        <CreditItem />
                        <CreditItem />
                        <CreditItem />
                    </ul>
                    <h3 className={styles["credit-heading"]}>Crew</h3>
                    <ul className={styles.crew}>
                        <CreditItem />
                        <CreditItem />
                        <CreditItem />
                        <CreditItem />
                        <CreditItem />
                    </ul>
                </section>
            </div>
        </CreditsDetailsLayout>
    )    
}