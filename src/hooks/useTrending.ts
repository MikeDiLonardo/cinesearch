import type { Movies } from "../types/movies";
import { apiFetcher } from "../utils/apiFetcher";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function useTrending() {
    const { data } = useSuspenseQuery<Movies>({
        queryKey: ["movies"],
        queryFn: () => apiFetcher("get", "3/trending/movie/day"),
    });

    return data.results;
}
