import type { Movie } from "./movie";

export interface LayoutContextType {
    clickedIcon: string;
    favorites: Movie[];
    isGrid: boolean;
    handleClickedIcon: (clickedIcon: string) => void; 
    handleAddFavorite: (newFavorite: Movie) => void;
    handleRemoveFavorite: (exFavorite: Movie) => void;
    onToggleLayout: () => void;
}