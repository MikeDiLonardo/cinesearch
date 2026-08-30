import { useState } from "react";
import { LayoutContext } from "./LayoutContext";

export function LayoutProvider(props: {children: React.ReactNode}) {
    const [clickedIcon, setClickedIcon] = useState("");
    const [favorites, setFavorites] = useState<string[]>([]);
    const [isGrid, setIsGrid] = useState(true);

    function handleClickedIcon(iconName: string) {
        setClickedIcon(iconName);
        
        setTimeout(() => {
            setClickedIcon("");
        }, 500);
    }

    function handleAddFavorite(newFavorite: string) {
        setFavorites([...favorites, newFavorite]);
    }

    function handleRemoveFavorite(exFavorite: string) {
        const remainingFavorites = favorites.filter(favorite => favorite !== exFavorite);
        setFavorites(remainingFavorites);
    }

    function onToggleLayout() {
        setIsGrid(!isGrid)
    }

    
    return <LayoutContext value={{clickedIcon, favorites, isGrid, handleClickedIcon, handleAddFavorite, handleRemoveFavorite, onToggleLayout}}>{props.children}</LayoutContext>
}