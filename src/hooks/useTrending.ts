import type { Movies } from "../types/movies";
import { apiFetcher } from "../utils/apiFetcher";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function useTrending(pageNumber: number) {
    const { data } = useSuspenseQuery<Movies>({
        queryKey: ["movies", pageNumber],
        queryFn: () => apiFetcher("get", "3/trending/movie/day", undefined, undefined, pageNumber),
    });

    return ({
        currentPage: data.page, 
        results: data.results, 
        totalPages: data.total_pages 
    })
}
