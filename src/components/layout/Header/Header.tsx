import { useId } from "react";
import { useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutContext } from "../Layout/Context/LayoutContext";
import SearchIcon from "../../icons/SearchIcon"
import ClearIcon from "../../icons/ClearIcon"
import InfoIcon from "../../icons/InfoIcon";
import styles from "./Header.module.css";
import TmdbCredit from "./TmdbCredit/TmdbCredit";

export default function Header() {
    const searchId = useId();
    const navigate = useNavigate();
    const context = useContext(LayoutContext)!;
    const { query , setSubmittedQuery, handleSearch, handleResetSearch } = context;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);    

    function handleSearchSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        navigate("/search");
        setSubmittedQuery(query)
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
            <TmdbCredit />
        </dialog>    
        <div className={styles.header}>
            <form onSubmit={handleSearchSubmit}>
                <div className={styles["search-container"]}>
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
                        />
                    </label>

                    <button type="button" className={styles["clear-icon-wrapper"]} onClick={handleResetSearch} >
                        <ClearIcon className={styles["clear-icon"]} width={20} height={20} strokeWidth={2}/>
                    </button>                
                </div>
            </form>
            <button className={styles["info-icon-wrapper"]} onClick={openModal}>
                <InfoIcon className={styles["info-icon"]} width={32} height={32} strokeWidth={1.25} />
            </button>              
        </div>
    </>)
}