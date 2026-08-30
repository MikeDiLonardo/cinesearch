export interface LayoutContextType {
    clickedIcon: string;
    favorites: string[];
    isGrid: boolean;
    handleClickedIcon: (clickedIcon: string) => void; 
    handleAddFavorite: (newFavorite: string) => void;
    handleRemoveFavorite: (exFavorite: string) => void;
    onToggleLayout: () => void;
}