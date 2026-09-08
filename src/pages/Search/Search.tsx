import { useContext } from "react";
import { LayoutContext } from "../../components/layout/Layout/Context/LayoutContext";
import useSearch from "../../hooks/useSearch";
import GridView from "../../components/views/GridView/GridView";
import ListView from "../../components/views/ListView/ListView";

export default function Search() {
    const context = useContext(LayoutContext)!;
    const { isGrid, submittedQuery } = context;
    const searchedMovies = useSearch(submittedQuery);  

    return (
        <div className="search">
            {isGrid ? <GridView page="search" movies={searchedMovies} query={submittedQuery} /> : <ListView page="search" movies={searchedMovies} query={submittedQuery} />}
        </div>
    )    
}