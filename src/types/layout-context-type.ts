import type { Movie } from "./movie";

export interface LayoutContextType {
    isLargeScreen: boolean;
    handleIsLargeScreen: () => void;

    clickedIcon: string;
    handleClickedIcon: (clickedIcon: string) => void;     

    query: string;
    submittedQuery: string;
    setSubmittedQuery: (query: string) => void;  

    pageNumberHome: number;
    handlePreviousPageHome: () => void;
    handleNextPageHome: (totalPages: number) => void;        
    pageNumberSearch: number;
    handlePreviousPageSearch: () => void;
    handleNextPageSearch: (totalPages: number) => void;        
    pageNumberFavorites: number;
    setPageNumberFavorites: (page: number) => void;    
    handlePreviousPageFavorites: () => void;
    handleNextPageFavorites: (totalPages: number) => void;        
    pageNumberCredits: number;
    handlePreviousPageCredits: () => void;
    handleNextPageCredits: (totalPages: number) => void;        

    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleResetSearch: () => void;    

    favorites: Movie[];
    handleAddFavorite: (newFavorite: Movie) => void;
    handleRemoveFavorite: (exFavorite: Movie) => void;

    isFunnelOpen: boolean;
    handleIsFunnelOpen: () => void;
    sortBy: string;
    handleFunnelSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;

    isGrid: boolean;    
    onToggleLayout: () => void;
}