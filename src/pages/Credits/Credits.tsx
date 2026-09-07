import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { LayoutContext } from "../../components/layout/Layout/Context/LayoutContext";
import usePerson from "../../hooks/usePerson";
import CreditsDetailsLayout from "../../components/layout/Layout/CreditsDetailsLayout/CreditsDetailsLayout";
import MediaItem from "../../components/cards/MediaItem/MediaItem";
import GridView from "../../components/views/GridView/GridView";
import ListView from "../../components/views/ListView/ListView";
import styles from "./Credits.module.css";

export default function Credits() {
    const [clickedTab, setClickedTab] = useState("filmography")
    const {id} = useParams();
    const actorId = Number.parseInt(id ?? "", 10); // ?? "" in case there's no number after credits/    
    const person = usePerson(actorId);
    
    const context = useContext(LayoutContext)!;
    const { isGrid } = context;
    console.log(person)

    /* age */

    const currentYear = new Date();
    const birthday = new Date(person.birthday);
    const deathday = person.deathday ? new Date(person.deathday) : null
    const latestYear = deathday === null ? currentYear : deathday; 
    let age = latestYear.getFullYear() - birthday.getFullYear();
    if (latestYear.getMonth() < birthday.getMonth() || 
        latestYear.getMonth() === birthday.getMonth() && latestYear.getDate() < birthday.getDate()) 
    {
        age -= 1;
    } 

    /* role */

    const knownFor = person.known_for_department;
    function job() {
        if (knownFor === "Acting" && person.gender === 1) {
            return knownFor.replace("ing", "ress");
        } else if (knownFor === "Acting" || knownFor === "Directing" || knownFor === "Editing") {
            return knownFor.replace("ing", "or");            
        } else if (knownFor === "Writing") {
            return knownFor.replace("ing", "er");
        } else if (knownFor === "Art") {
            return knownFor.replace("Art", "Artist");
        } else {
            return knownFor
        }
    }

    const uniqueMovie = new Map();
    person.movie_credits.cast.forEach(movie => {
        if (!uniqueMovie.has(movie.id)) {
            uniqueMovie.set(movie.id, movie)
        } 
    })
    person.movie_credits.crew.forEach(movie => {
        if (!uniqueMovie.has(movie.id)) {
            uniqueMovie.set(movie.id, movie)
        } 
    })    

    const uniqueMovies = [...uniqueMovie.values()];

    function handleClickedTab(tabName: string) {
        setClickedTab(tabName);
    }

    return (<>
        <div /* background image */
            style={{
                position: "absolute",
                top: "0",
                height: "40vh",
                width: "100%",
                zIndex: "10",
                opacity: "0.45",
                backgroundImage: `linear-gradient(180deg, rgba(0, 0 , 0, 0), var(--bg-header-footer)), url(https://image.tmdb.org/t/p/w500/${person.profile_path})`, 
                backgroundSize: "100%", 
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center 40%",
            }}      
        ></div>        
        <CreditsDetailsLayout page="credits">  
            <div className={styles.container}>
                <section className={styles.header}>
                        <MediaItem 
                            view="credits" 
                            shape="rectangle" 
                            image={person.profile_path ? `https://image.tmdb.org/t/p/w500/${person.profile_path}` : "/credit-page-placeholder.svg"} 
                        />

                        <div className={styles.info}>
                            <div>
                                <h2 className={`${styles.name} text--md-sb`}>{person.name}</h2>
                                {person.known_for_department ? <p className={`${styles.job} text--base-sb`}>{job()}</p> : <p className={`${styles.job} text--base-sb`}>Occupation Unknown</p>}
                            </div>
                            <div>
                                {person.place_of_birth ?
                                    <p className={`${styles.birthplace} text--sm-rg`}>Born in <span className="text--sm-sb">{person.place_of_birth}</span></p>
                                    : 
                                    <p className={`${styles.birthplace} text--sm-rg`}> Birthplace <span className="text--sm-sb">Unknown</span></p>
                                }
                                {person.birthday? 
                                    <p className={`${styles.age} text--sm-rg`}>
                                        {deathday ? `${age} years old (Deceased)` : `${age} years old`}
                                    </p>
                                : 
                                    <p className={`${styles.age} text--sm-rg`}>Age Unknown</p>
                                }
                            </div>
                        </div>
                </section>
                <div className={`${styles.tabs} text--sm-rg`}>
                    <button 
                        className={`${styles["biography-tab"]} ${clickedTab === "biography" ? `${styles["clicked-tab"]}` : "" }`}
                        aria-label="View Biography"
                        onClick={() => handleClickedTab("biography")}
                    >
                        Biography
                    </button>
                    <button 
                        className={`${styles["filmography-tab"]} ${clickedTab === "filmography" ? `${styles["clicked-tab"]}` : "" }`}
                        aria-label="View Filmography"
                        onClick={() => handleClickedTab("filmography")}
                    >
                        Filmography
                    </button>
                </div>
            </div>
            {clickedTab === "biography" ? 
                <div className={`${styles["biography-wrapper"]} text--sm-rg`}>
                    {person.biography ? 
                        person.biography.split("\n").map((bio, index) => (bio === "" ? 
                            <p key={index}>&nbsp;</p> // To create paragraphs
                            :
                            <p key={index}>{bio}</p>)) // Without &nbsp; to not add a space at the beginning of each paragraph
                        : 
                        "No biography provided. Please try again later."}
                </div> 
                : 
                <div className={styles.filmography}>
                    {isGrid ? <GridView page="credits" movies={uniqueMovies} /> : <ListView page="credits" movies={uniqueMovies} />}
                </div> 
            }
        </CreditsDetailsLayout>
    </>)    
}   

