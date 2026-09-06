import { useContext } from "react";
import { LayoutContext } from "../../components/layout/Layout/Context/LayoutContext";
import useTrending from "../../hooks/useTrending";
import GridView from "../../components/views/GridView/GridView";
import ListView from "../../components/views/ListView/ListView";

export default function Home() {
    const movies = useTrending()    
    const context = useContext(LayoutContext);
    if (!context) return null;
    const { isGrid } = context;    

    return (
        <div className="home">
            {isGrid ? <GridView page="home" movies={movies}  /> : <ListView page="home" movies={movies} />}
        </div>
    )
}