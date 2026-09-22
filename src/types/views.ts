import type { Movie } from "./movie";

export interface Views {
    view: "grid" | "list";
    credits: boolean;
    movies: Movie[];
    handlePrevious: () => void;
    handleNext: (totalPages: number) => void;
    currentPage: number;
    totalPages: number;
}