import type { Movie } from "./movie";

export interface MediaItem {
    view: "grid" | "list" | "details" | "credits";
    movie?: Movie;
    title?: string;
    voteAverage?: number;
    releaseDate?: string;
    image?: string;
    shape?: "rectangle" | "square";
}