import { useContext } from "react";
import { LayoutContext } from "../../components/layout/Layout/Context/LayoutContext";
import GridView from "../../components/views/GridView/GridView";
import ListView from "../../components/views/ListView/ListView";

export default function Favorites() {
    const context = useContext(LayoutContext);
    if (!context) return null;
    const { isGrid } = context;

    return (
        <div className="favorites">
            {isGrid ? <GridView page="favorites" /> : <ListView page="favorites" />}
        </div>
    )    
}