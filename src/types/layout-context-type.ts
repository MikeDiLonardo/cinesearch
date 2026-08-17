export interface LayoutContextType {
    clickedIcon: string;
    isGrid: boolean;
    handleClickedIcon: (clickedIcon: string) => void;
    onToggleLayout: () => void;
}