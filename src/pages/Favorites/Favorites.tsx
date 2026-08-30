import { useContext } from "react";
import { LayoutContext } from "../../components/layout/Layout/Context/LayoutContext";
import GridView from "../../components/views/GridView/GridView";
import ListView from "../../components/views/ListView/ListView";

export default function Favorites() {
    const context = useContext(LayoutContext);
    if (!context) return null;
    const { clickedIcon, isGrid } = context;

    const favorites = []

    return (
        <div className="favorites">
            {isGrid ? <GridView /> : <ListView />}
        </div>
    )    
}