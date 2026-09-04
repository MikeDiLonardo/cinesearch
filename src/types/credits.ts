import type { Movie } from "./movie"

export interface Credits {
    id: number;
    movie_credits: {
        cast: Movie[];
        crew: Movie[];
    }    
    profile_path: string;
    name: string;
    known_for_department: string;
    place_of_birth: string;
    birthday: string;
    biography: string;
}