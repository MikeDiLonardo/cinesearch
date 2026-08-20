const baseUrl = "https://api.themoviedb.org/";
const key = import.meta.env.VITE_TMDB_KEY; 

export async function apiFetcher(method: string, endpoint: string, data?: string) {
    const res = await fetch(`${baseUrl}${endpoint}?api_key=${key}`, {
        method,
        body: data ? JSON.stringify(data) : undefined
    });
    const jsonResponse = await res.json();
    return jsonResponse;
}
