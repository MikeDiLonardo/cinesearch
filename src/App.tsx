import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import ScrollToTop from "./components/common/ScrollToTop";
import SuspenseFallback from "./components/common/Suspense/SuspenseFallback";
import PageNotFound from "./components/common/PageNotFound/PageNotFound";
import BaseLayout from "./components/layout/Layout/BaseLayout/BaseLayout";
import HeaderLayout from "./components/layout/Layout/HeaderLayout/HeaderLayout";
import Credits from "./pages/Credits/Credits";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Favorites from "./pages/Favorites/Favorites";

export default function App() {
  return (
  <BrowserRouter>
    <ScrollToTop />
    <Suspense fallback={<SuspenseFallback />}>
      <Routes>
        <Route element={<BaseLayout />}>

        <Route element={<HeaderLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>

        <Route path="/details/:id" element={<Details />} />
        <Route path="/credits/:id" element={<Credits />} />        
        <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
  )
}
