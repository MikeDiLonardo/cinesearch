import { useContext } from "react";
import { LayoutContext } from "../../components/layout/Layout/Context/LayoutContext";
import useTrending from "../../hooks/useTrending";
import GridView from "../../components/views/GridView/GridView";
import ListView from "../../components/views/ListView/ListView";

export default function Home() {
    const context = useContext(LayoutContext)!;
    const { isGrid, pageNumber } = context;    
    const {currentPage = 1, results = [], totalPages = 1} = useTrending(pageNumber);  

    return (
        <div className="home">
            {isGrid ? 
                <GridView page="home" movies={results} currentPage={currentPage} totalPages={totalPages} /> 
                : 
                <ListView page="home" movies={results} currentPage={currentPage} totalPages={totalPages} />
            }
        </div>
    )
}