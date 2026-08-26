import type { Movie } from "./movie";
import type { Credits } from "./credits";

export interface MovieCreditsDetails extends Movie {
    backdrop_path: string;
    credits: {
        cast: Credits[];   
        crew: Credits[];    
    };    
    genres: {
        id: number;
        name: string;
    }[];
    overview: string;
    runtime: number;
    tagline: string;
}