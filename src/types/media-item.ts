export interface MediaItem {
    view: "grid" | "list" | "details" | "credits";
    title?: string;
    voteAverage?: number;
    releaseDate?: string;
    image?: string;
    shape?: "rectangle" | "square";
}