import type { Icons } from "../../types/icons";

export default function ClearIcon({ className, width, height }: Icons) {
    return (
        <svg
            className={className}        
            width={width}
            height={height} 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="2" 
            stroke="currentColor" 
        >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M6 18 18 6M6 6l12 12" 
            />
        </svg>
    )
}