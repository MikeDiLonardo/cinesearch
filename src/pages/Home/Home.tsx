import { useContext } from "react";
import { LayoutContext } from "../../components/layout/Layout/Context/LayoutContext";
import GridView from "../../components/views/GridView/GridView";
import ListView from "../../components/views/ListView/ListView";


export default function Home() {
    const context = useContext(LayoutContext);
    if (!context) return null;
    const { isGrid } = context;    

    return (
        <div className="home">
            {isGrid ? <GridView /> : <ListView />}
        </div>
    )
}