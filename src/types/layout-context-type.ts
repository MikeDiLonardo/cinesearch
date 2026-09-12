import type { Movie } from "./movie";

export interface LayoutContextType {
    clickedIcon: string;
    handleClickedIcon: (clickedIcon: string) => void;     
    query: string;
    submittedQuery: string;
    setSubmittedQuery: (query: string) => void;  
    pageNumber: number;
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleResetSearch: () => void;    
    handlePreviousPage: () => void;
    handleNextPage: (totalPages: number) => void;    
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