import type { Movies } from "../types/movies";
import { apiFetcher } from "../utils/apiFetcher";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function useSearch(query: string, pageNumber: number) {
    const { data } = useSuspenseQuery<Movies>({
        queryKey: ["search", query, pageNumber],
        queryFn: () => apiFetcher("get", "3/search/movie", undefined, `query=${query.trim().toLocaleLowerCase()}`, pageNumber),
    });

    return ({
        currentPage: data.page, 
        results: data.results, 
        totalPages: data.total_pages 
    })
}