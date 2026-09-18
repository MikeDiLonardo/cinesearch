import { useId, useContext, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LayoutContext } from "../Layout/Context/LayoutContext";
import SearchIcon from "../../icons/SearchIcon"
import ClearIcon from "../../icons/ClearIcon"
import InfoIcon from "../../icons/InfoIcon";
import styles from "./Header.module.css";
import TmdbLogo from "../../icons/TmdbLogo";

export default function Header() {
    const searchId = useId();
    const navigate = useNavigate();
    const context = useContext(LayoutContext)!;
    const { query , setSubmittedQuery, handleSearch, handleResetSearch } = context;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);    
    const searchRef = useRef<HTMLInputElement>(null);

    function handleSearchSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        navigate("/search");
        setSubmittedQuery(query)
    }

    function clearSearch() {
        handleResetSearch();
        searchRef.current?.focus();
    }

    /* tmdb credit */

    function openModal() {
        if (!dialogRef.current) return;
        dialogRef.current.showModal();
        dialogRef.current.blur();
        setIsModalOpen(!isModalOpen);
    }

    function closeModal(event: React.MouseEvent<HTMLDialogElement>) {
        if (!dialogRef.current) return;
        if (event.target === dialogRef.current) {
            dialogRef.current.close()
            setIsModalOpen(!isModalOpen);            
        }
    }        

    return (<>
        <dialog ref={dialogRef} onClick={closeModal} className={styles.modal}>
            <div className={styles["tmdb-credit"]}>
                <TmdbLogo className="tmdb-logo" width={118} height={85} fill="var(--stroke-light)" />
                <p className="text--sm-rg">
                    This product uses the TMDB API but<br />
                    is not endorsed or certified by TMDB.
                </p>
            </div>  
        </dialog>    
        <div className={styles["header-wrapper"]}>
            <div className={styles.header}>
                <form onSubmit={handleSearchSubmit}>
                    <div className={styles.container}>
                        <Link to="/">
                            <p className={`${styles.cineSearch} text--xxl-sb`}>CineSearch</p>
                        </Link>
                        
                        <div className={styles["search-wrapper"]}>
                            <button className={styles["search-icon-wrapper"]}>
                                <SearchIcon className={styles["search-icon"]} width={20} height={20} strokeWidth={2}/>
                            </button>

                            <label htmlFor={searchId}>
                                <input 
                                    className={styles.search}
                                    value={query}
                                    onChange={handleSearch} 
                                    type="search" 
                                    placeholder="Search..." 
                                    id={searchId}
                                    ref={searchRef}
                                />
                            </label>

                            <button type="button" className={styles["clear-icon-wrapper"]} onClick={clearSearch} >
                                <ClearIcon className={styles["clear-icon"]} width={20} height={20} strokeWidth={2}/>
                            </button>    
                        </div>            
                    </div>
                </form>
                <button className={styles["info-icon-wrapper"]} onClick={openModal}>
                    <InfoIcon className={styles["info-icon"]} width={32} height={32} strokeWidth={1.25} />
                </button>      
            </div>
        </div>
    </>)
}