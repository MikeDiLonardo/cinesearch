import type { MovieCreditsDetails } from "../types/movie-credits-details";
import { apiFetcher } from "../utils/apiFetcher";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function useCreditsDetails(id: number) {
    const { data } = useSuspenseQuery<MovieCreditsDetails>({
        queryKey: ["movies", id],
        queryFn: () => apiFetcher("get", `3/movie/${id}`, undefined, "append_to_response=credits"),
    });

    return data
}
