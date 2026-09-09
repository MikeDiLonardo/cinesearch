import type { Movie } from "./movie";

export interface View {
    page: string;
    movies: Movie[];
    query?: string;
    currentPage: number;
    totalPages: number;
} 