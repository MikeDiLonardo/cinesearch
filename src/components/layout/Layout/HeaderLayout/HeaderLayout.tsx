import { useState, useRef } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import TmdbCredit from "../../Header/TmdbCredit/TmdbCredit";
import Header from "../../Header/Header";
import styles from "./HeaderLayout.module.css"

export default function HeaderLayout() {
    const context = useOutletContext();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);

    function openModal() {
        if (!dialogRef.current) return;
        dialogRef.current.showModal();
        setIsModalOpen(!isModalOpen);
    }

    function closeModal(event: React.MouseEvent<HTMLDialogElement>) {
        if (!dialogRef.current) return;
        if (event.target ===  dialogRef.current) {
            dialogRef.current.close()
            setIsModalOpen(!isModalOpen);            
        }
    }    
    
    return (<>
        <dialog ref={dialogRef} onClick={closeModal} className={styles.modal}>
            <TmdbCredit />
        </dialog>
        <Header openModal={openModal} />
        <div className={styles["feed-container"]}>
            <Outlet context={context}/>
        </div>
    </>)
}