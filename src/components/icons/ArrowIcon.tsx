import type { Icons } from "../../types/icons";

export default function ArrowIcon({ className, width, height, strokeWidth }: Icons) {
    return (
        <svg
            className={className}    
            width={width}
            height={height} 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={strokeWidth} 
            stroke="currentColor" 
        >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" 
            />
        </svg>
    )
}