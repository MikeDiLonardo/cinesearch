import type { Movies } from "../types/movies";
import { apiFetcher } from "../utils/apiFetcher";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function useSearch(query: string) {
    const { data } = useSuspenseQuery<Movies>({
        queryKey: ["search"],
        queryFn: () => apiFetcher("get", "3/search/movie", undefined, `query=${query.trim().toLocaleLowerCase()}`),
    });

    return data.results;
}