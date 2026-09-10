import type { Credits } from "../types/credits";
import { apiFetcher } from "../utils/apiFetcher";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function usePerson(id: number) {
    const { data } = useSuspenseQuery<Credits>({
        queryKey: ["person", id],
        queryFn: () => apiFetcher("get", `3/person/${id}`, undefined, "append_to_response=movie_credits"),
    });

    return data;
}
