import { useContext, useEffect } from "react";
import { LayoutContext } from "../../components/layout/Layout/Context/LayoutContext";
import useTrending from "../../hooks/useTrending";
import GridView from "../../components/views/GridView";
import ListView from "../../components/views/ListView";

export default function Home() {
    const context = useContext(LayoutContext)!;
    const { isLargeScreen, handleIsLargeScreen, isGrid, pageNumberHome } = context;    
    const {currentPage = 1, results = [], totalPages = 1} = useTrending(pageNumberHome);  

    useEffect(() => {
        if (isLargeScreen) {
            handleIsLargeScreen();
        }
    }, [isLargeScreen, handleIsLargeScreen])

    return (<>
        <div className="home">
            {isGrid ? 
                <GridView page="home" movies={results} currentPage={currentPage} totalPages={totalPages} /> 
                :
                <ListView page="home" movies={results} currentPage={currentPage} totalPages={totalPages} />
            }
        </div>    
    </>)
}