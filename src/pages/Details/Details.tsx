import { useParams } from "react-router-dom";
import { useState } from "react";
import useCreditsDetails from "../../hooks/useCreditsDetails";
import CreditsDetailsLayout from "../../components/layout/Layout/CreditsDetailsLayout/CreditsDetailsLayout";
import MediaItem from "../../components/cards/MediaItem/MediaItem";
import CreditItem from "../../components/cards/CreditItem/CreditItem";
import FavoriteIcon from "../../components/icons/FavoriteIcon";
// import BackButton from "../../components/buttons/BackButton/BackButton";
import styles from "./Details.module.css";

export default function Details() {
    const {id} = useParams();    
    const movieId = Number.parseInt(id ?? "", 10); // ?? "" in case there's no number after details/
    const movie = useCreditsDetails(movieId);
    console.log(movie);
    const [visibleCast, setVisibleCast] = useState(10);
    const [visibleCrew, setVisibleCrew] = useState(10);
    
    const year = movie.release_date.substring(0, 4); 
    const director = movie.credits.crew.filter(person => person.job === "Director").map(person => person.name).join(", ");

    const movieRating = Math.round(movie.vote_average) / 2 
    const rating = [];
    for (let i = 0; i < 5; i++) {
        if (i + 1 <= movieRating) {
            rating.push(<FavoriteIcon width={18} height={18} className={styles.star} fill="var(--favorite)" strokeWidth={1} isHalf={false}  key={i}/>) 
        } else if (i + 0.5 === movieRating) {
            rating.push(<FavoriteIcon width={18} height={18} className={styles.star} fill="var(--favorite)" strokeWidth={1} isHalf={true}  key={i}/>)
        } else {
            rating.push(<FavoriteIcon width={18} height={18} className={styles.star} fill="none" strokeWidth={1} key={i}/>)
        }
    }

    function handleMoreCast() {
        setVisibleCast(movie.credits.cast.length);
    }

    function handleLessCast() {
        setVisibleCast(10);
    }

    function handleMoreCrew() {
        setVisibleCrew(movie.credits.crew.length);
    }

    function handleLessCrew() {
        setVisibleCrew(10);
    }

    const castList = movie.credits.cast.slice(0, visibleCast).map((cast, index) => 
                        <li key={cast.id}>
                            <CreditItem 
                                index={index}
                                name={cast.name} 
                                image={cast.profile_path ? cast.profile_path : 
                                    `/credits-placeholder-${index % 2 === 0 ? "dark" : "light"}.svg`} 
                                role={cast.character}
                            />
                        </li>);
    
    const crewList = movie.credits.crew.slice(0, visibleCrew).map((crew, index) =>
                        <li key={crew.id}>
                            <CreditItem 
                                index={index}                                
                                name={crew.name} 
                                image={crew.profile_path ? crew.profile_path : 
                                    `/credits-placeholder-${index % 2 === 0 ? "dark" : "light"}.svg`} 
                                role={crew.job}
                            />
                        </li>)
                        

    
    console.log(movie.credits.cast.length)

    return (<>
        <div /* background image */
            style={{
                position: "absolute",
                top: "0",
                height: "35vh",
                width: "100%",
                zIndex: "10",
                opacity: "0.5",
                backgroundImage: `linear-gradient(180deg, rgba(0, 0 , 0, 0), var(--bg-header-footer)), url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`, 
                backgroundSize: "150%", 
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
            }}      
        ></div>
        <CreditsDetailsLayout page="details">
            <div className={styles.container}>
                <section className={styles.header}>
                    <MediaItem view="details" shape="rectangle" key={movie.id} image={movie.poster_path} />

                    <div className={styles.info}>
                        <h2 className={`${styles.title} text--md-sb`}>{movie.title}</h2>
                        <p className={`${styles.year} text--xs-lt`}><time dateTime="2019">{year}</time></p>
                        <div>
                            <p className={`${styles["directed-by"]} text--xs-lt`}>Directed by</p>
                            <p className={`${styles.director} text--xs-sb`}>{director}</p>
                        </div>
                        <p className={`${styles.duration} text--xs-lt`}><time dateTime="PT96M">{movie.runtime} mins</time></p>
                        <div className={styles.rating}>
                            {rating}
                        </div>
                        <ul className={`${styles.genres} text--xs-lt`}>
                            {movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
                        </ul>
                    </div>
                </section>
                
                <section className={styles["headline-summary"]}>
                    <h3 className={`${styles.headline} text--base-sb`}>
                        {movie.tagline === "" ? "Summary" : movie.tagline }
                    </h3>
                    <p className={`${styles.summary} text--xs-rg`}>{movie.overview}</p>
                </section>
                
                <section className={styles.credit}>
                    <h3 className={styles["credit-heading"]}>Cast</h3>
                    <ul className={styles.cast}>
                        {castList}
                    </ul>
                    {movie.credits.cast.length > 10 ? 
                        <button onClick={visibleCast === 10 ? handleMoreCast : handleLessCast}>
                            {visibleCast === 10 ? "More" : "Less"}
                        </button>    
                    :
                        null
                    }

                    <h3 className={styles["credit-heading"]}>Crew</h3>
                    <ul className={styles.crew}>
                        {crewList}
                    </ul>
                    {movie.credits.crew.length  > 10 ? 
                        <button onClick={visibleCrew === 10 ? handleMoreCrew : handleLessCrew}>
                            {visibleCrew === 10 ? "More" : "Less"}
                        </button>    
                    :
                        null
                    }                             
                </section>
            </div>
        </CreditsDetailsLayout>
    </>)    
}