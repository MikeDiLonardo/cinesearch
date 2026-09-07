import { useContext } from "react";
import { LayoutContext } from "../../components/layout/Layout/Context/LayoutContext";
import GridView from "../../components/views/GridView/GridView";
import ListView from "../../components/views/ListView/ListView";

export default function Search() {
    const context = useContext(LayoutContext)!;
    const { isGrid } = context;

    return (
        <div className="search">
            {isGrid ? <GridView page="search" movies={movies}/> : <ListView page="search" movies={movies}/>}
        </div>
    )    
}