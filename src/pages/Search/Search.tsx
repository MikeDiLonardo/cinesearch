import {useOutletContext} from "react-router-dom";
import GridView from "../../components/views/GridView/GridView";
import ListView from "../../components/views/ListView/ListView";

export default function Search() {
    const { isGrid } = useOutletContext<{ isGrid: boolean } >();

    return (
        <div className="search">
            {isGrid ? <GridView /> : <ListView />}
        </div>
    )    
}