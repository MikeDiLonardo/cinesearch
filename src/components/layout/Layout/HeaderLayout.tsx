import { Outlet, useOutletContext } from "react-router-dom";
import Header from "../Header/Header";

export default function HeaderLayout() {
    const context = useOutletContext();

    return (<>
        <Header/>
        <Outlet context={context}/>
    </>)
}