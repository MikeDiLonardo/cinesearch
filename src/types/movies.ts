import type { Movie } from "./movie";

export interface Movies {
    results: Movie[];
    page?: number;
    total_pages?: number;
}