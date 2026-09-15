import { useContext } from "react";
import { LayoutContext } from "../../components/layout/Layout/Context/LayoutContext";
import useSearch from "../../hooks/useSearch";
import GridView from "../../components/views/GridView/GridView";
import ListView from "../../components/views/ListView/ListView";

export default function Search() {
    const context = useContext(LayoutContext)!;
    const { isGrid, submittedQuery, pageNumberSearch } = context;
    const {currentPage = 1, results = [], totalPages = 1} = useSearch(submittedQuery, pageNumberSearch);  

    return (
        <div>
            {isGrid ? 
                <GridView page="search" movies={results} query={submittedQuery} currentPage={currentPage} totalPages={totalPages} /> 
                : 
                <ListView page="search" movies={results} query={submittedQuery} currentPage={currentPage} totalPages={totalPages} />
            }
        </div>
    )    
}