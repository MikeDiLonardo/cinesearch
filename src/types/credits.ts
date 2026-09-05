import type { Movie } from "./movie"

export interface Credits {
    id: number;
    gender: number;
    movie_credits: {
        cast: Movie[];
        crew: Movie[];
    }    
    profile_path: string;
    name: string;
    known_for_department: string;
    place_of_birth: string;
    birthday: string;
    deathday: string;
    biography: string;
}