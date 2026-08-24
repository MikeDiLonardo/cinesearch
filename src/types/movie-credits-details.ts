import type { Movie } from "./movie";
import type { CastCrew } from "./cast-crew";

export interface MovieCreditsDetails extends Movie {
    credits: {
        cast: CastCrew[];   
        crew: CastCrew[];    
    };    
    genres: {
        id: number;
        name: string;
    }[];
    overview: string;
    runtime: number;
    tagline: string;
}