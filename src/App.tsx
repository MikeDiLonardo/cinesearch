import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import BaseLayout from "./components/layout/Layout/BaseLayout/BaseLayout";
import HeaderLayout from "./components/layout/Layout/HeaderLayout/HeaderLayout";
import Credits from "./pages/Credits/Credits";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Favorites from "./pages/Favorites/Favorites";
import { apiFetcher } from "./utils/apiFetcher";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function App() {

  const { data: movies } = useSuspenseQuery({
    queryKey: ["movies"],
    queryFn: () => apiFetcher("get", "3/trending/movie/day"),
  });

  console.log(movies);
  
  return <BrowserRouter>
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route element={<BaseLayout />}>

        <Route element={<HeaderLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>

        <Route path="/details" element={<Details />} />
        <Route path="/credits" element={<Credits />} />        
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
}
