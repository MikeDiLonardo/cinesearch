import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import BaseLayout from "./components/layout/Layout/BaseLayout/BaseLayout";
import HeaderLayout from "./components/layout/Layout/HeaderLayout/HeaderLayout";
import Credits from "./pages/Credits/Credits";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Favorites from "./pages/Favorites/Favorites";

export default function App() {
  return <BrowserRouter>
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route element={<BaseLayout />}>

        <Route element={<HeaderLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>

        <Route path="/details/:id" element={<Details />} />
        <Route path="/credits" element={<Credits />} />        
        <Route path="*" element={<p>Page Not Found</p>} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
}
