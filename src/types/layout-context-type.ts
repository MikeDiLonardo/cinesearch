import type { Movie } from "./movie";

export interface LayoutContextType {
    clickedIcon: string;
    query: string;
    submittedQuery: string;
    favorites: Movie[];
    isGrid: boolean;
    handleClickedIcon: (clickedIcon: string) => void; 
    setSubmittedQuery: (query: string) => void;
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleResetSearch: () => void;
    handleAddFavorite: (newFavorite: Movie) => void;
    handleRemoveFavorite: (exFavorite: Movie) => void;
    onToggleLayout: () => void;
}