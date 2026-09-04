import type { CreditsDetails } from "../types/credits-details";
import { apiFetcher } from "../utils/apiFetcher";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function useCreditsDetails(id: number) {
    const { data } = useSuspenseQuery<CreditsDetails>({
        queryKey: ["movies", id],
        queryFn: () => apiFetcher("get", `3/movie/${id}`, undefined, "append_to_response=credits"),
    });

    return data
}
