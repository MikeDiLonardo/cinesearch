import { useNavigate } from "react-router-dom";
import MediaItem from "../../components/cards/MediaItem/MediaItem";
import GridView from "../../components/views/GridView/GridView";
// import ListView from "../../components/views/ListView/ListView";
import BackIcon from "../../components/icons/BackIcon";
import styles from "./Credits.module.css";

export default function Credits() {
    const navigate = useNavigate();

    return (
        <div className={styles.credits}>
            <div className={styles["header-wrapper"]}>
                <button onClick={() => navigate(-1)} className={styles["back-icon-wrapper"]} aria-label="Go Back">
                    <BackIcon className={styles["back-icon"]} width={32} height={32} strokeWidth={1.25} />
                </button>
                <section className={styles.header}>
                        <MediaItem view="details" shape="rectangle" />

                        <div className={styles.info}>
                            <div>
                                <h2 className={`${styles.name} text--md-sb`}>Gore Abrams</h2>
                                <p className={`${styles.job} text--base-sb`}>Actor</p>
                            </div>
                            <div>
                                <p className={`${styles.birthplace} text--sm-rg`}>Born in New York</p>
                                <p className={`${styles.age} text--sm-rg`}>35 years old</p>
                            </div>
                        </div>
                </section>
                <div className={`${styles["tabs"]} text--sm-rg`}>
                    <button className={`${styles["biography-tab"]}`}>Biography</button>
                    <button className={`${styles["filmography-tab"]} ${styles.active}`}>Filmography</button>
                </div>
            </div>
            {/* <div className={`${styles["biography"]} text--sm-rg`}>
                <p>
                    Sed elementum turpis lorem, nec suscipit felis tempus a. Aenean volutpat ultrices accumsan. Nullam tristique velit lectus, vitae aliquet turpis fermentum ac. Phasellus fringilla libero et arcu posuere, commodo accumsan neque viverra. 
                </p>
                <p>                 
                    Sede in velit sodales, sollicitudin sapien quis, ullamcorper metus. Mauris auctor nec tellus sit amet tincidunt. Cras vestibulum lacinia risus eu vehicula. Praesent leo ipsum, semper eget ullamcorper at, suscipit id elit. Vestibulum dignissim consequat condimentum. Phasellus finibus lectus sit amet lorem eleifend, id pretium erat convallis. 
                </p>   
                <p>
                    In orci tellus, molestie eu vulputate ac, laoreet in velit. Pellentesque a tempor eros. Proin cursus nisl nec molestie efficitur. Aenean varius euismod tempor. 
                </p>
            </div> */}
            <div className={styles.filmography}>
                <GridView />
            </div>
        </div>
    )    
}