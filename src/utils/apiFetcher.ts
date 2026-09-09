const baseUrl = "https://api.themoviedb.org/";
const key = import.meta.env.VITE_TMDB_KEY; 

export async function apiFetcher(method: string, endpoint: string, data?: string, queryParam?: string, page?: number) {
    const baseFetch = `${baseUrl}${endpoint}?api_key=${key}`;
    let finalUrl = baseFetch;
    if (queryParam) {
        finalUrl += `&${queryParam}`
    } 
    if (page) {
        finalUrl += `&page=${page}`
    }

    const res = await fetch(finalUrl, {
        method,
        body: data ? JSON.stringify(data) : undefined
    });
    const jsonResponse = await res.json();
    return jsonResponse;
}
