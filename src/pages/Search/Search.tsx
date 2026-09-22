import { useContext, useEffect } from "react";
import { LayoutContext } from "../../components/layout/Layout/Context/LayoutContext";
import useSearch from "../../hooks/useSearch";
import GridView from "../../components/views/GridView";
import ListView from "../../components/views/ListView";

export default function Search() {
    const context = useContext(LayoutContext)!;
    const { isLargeScreen, handleIsLargeScreen, isGrid, submittedQuery, pageNumberSearch } = context;
    const {currentPage = 1, results = [], totalPages = 1} = useSearch(submittedQuery, pageNumberSearch);  

    useEffect(() => {
        if (isLargeScreen) {
            handleIsLargeScreen();
        }
    }, [isLargeScreen, handleIsLargeScreen])

    return (
        <div className="search">
            {isGrid ? 
                <GridView page="search" movies={results} query={submittedQuery} currentPage={currentPage} totalPages={totalPages} /> 
                : 
                <ListView page="search" movies={results} query={submittedQuery} currentPage={currentPage} totalPages={totalPages} />
            }
        </div>
    )    
}