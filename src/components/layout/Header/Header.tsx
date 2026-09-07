import { useId } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutContext } from "../Layout/Context/LayoutContext";
import useSearch from "../../../hooks/useSearch";
import SearchIcon from "../../icons/SearchIcon"
import ClearIcon from "../../icons/ClearIcon"
import InfoIcon from "../../icons/InfoIcon";
import styles from "./Header.module.css";

export default function Header({ openModal }: { openModal: () => void}) {
    const searchId = useId();
    const navigate = useNavigate();
    const context = useContext(LayoutContext)!;
    const { query, handleSearch, handleResetSearch } = context;
    const searchedMovies = useSearch(query);  

    function handleSearchSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        navigate("/search");
    }

    return (
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

                    <button className={styles["clear-icon-wrapper"]} onClick={handleResetSearch}>
                        <ClearIcon className={styles["clear-icon"]} width={20} height={20} strokeWidth={2}/>
                    </button>                
                </div>
            </form>
            <button className={styles["info-icon-wrapper"]} onClick={openModal}>
                <InfoIcon className={styles["info-icon"]} width={32} height={32} strokeWidth={1.25} />
            </button>              
        </div>
    )
}