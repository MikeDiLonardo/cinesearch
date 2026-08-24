const baseUrl = "https://api.themoviedb.org/";
const key = import.meta.env.VITE_TMDB_KEY; 

export async function apiFetcher(method: string, endpoint: string, data?: string, queryParam?: string) {
    const baseFetch = `${baseUrl}${endpoint}?api_key=${key}`;

    const res = await fetch(queryParam ? baseFetch + `&${queryParam}` : baseFetch, {
        method,
        body: data ? JSON.stringify(data) : undefined
    });
    const jsonResponse = await res.json();
    return jsonResponse;
}
