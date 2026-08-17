import { useState } from "react";
import { LayoutContext } from "./LayoutContext";

export function LayoutProvider(props: {children: React.ReactNode}) {
    const [clickedIcon, setClickedIcon] = useState("");
    const [isGrid, setIsGrid] = useState(true);

    function handleClickedIcon(iconName: string) {
        setClickedIcon(iconName);
        
        setTimeout(() => {
            setClickedIcon("");
        }, 500);
    }

    function onToggleLayout() {
        setIsGrid(!isGrid)
    }

    
    return <LayoutContext value={{clickedIcon, isGrid, handleClickedIcon, onToggleLayout}}>{props.children}</LayoutContext>
}