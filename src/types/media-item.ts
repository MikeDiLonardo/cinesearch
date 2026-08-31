import type { Movie } from "./movie";

export interface MediaItem {
    movie: Movie;
    view: "grid" | "list" | "details" | "credits";
    title?: string;
    voteAverage?: number;
    releaseDate?: string;
    image?: string;
    shape?: "rectangle" | "square";
}