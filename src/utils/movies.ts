const baseUrl = "https://api.themoviedb.org/3/trending/movie/day";
const key = import.meta.env.VITE_TMDB_KEY; 

export async function getMovie() {
    const res = await fetch(`${baseUrl}?api_key=${key}`);
    const data = await res.json();
    console.log(data);
}