import type { Movie } from "./movie";
import type { CastCrew } from "./cast-crew";

export interface CreditsDetails extends Movie {
    backdrop_path: string;
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