import {useOutletContext} from "react-router-dom";
import GridView from "../../components/views/GridView/GridView";
import ListView from "../../components/views/ListView/ListView";


export default function Home() {
    const { isGrid } = useOutletContext<{ isGrid: boolean }>();

    return (
        <div className="home">
            {isGrid ? <GridView /> : <ListView />}
        </div>
    )
}