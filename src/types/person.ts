import type { Movie } from "./movie"

export interface Person {
    movie_credits: {
        cast: Movie[];
        crew: Movie[];
    }
}