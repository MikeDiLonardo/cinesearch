import type { Movie } from "./movie";

export interface View {
    page: string;
    movies: Movie[];
} 