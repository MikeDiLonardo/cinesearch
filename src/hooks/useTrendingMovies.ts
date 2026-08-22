import type { TMDBResponse } from "../types/tmbd-response";
import { apiFetcher } from "../utils/apiFetcher";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function useTrendingMovies() {
    const { data } = useSuspenseQuery<TMDBResponse>({
        queryKey: ["movies"],
        queryFn: () => apiFetcher("get", "3/trending/movie/day"),
    });

    return data.results;
}
