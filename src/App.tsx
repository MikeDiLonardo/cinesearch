import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout/Layout";
import CastCrew from "./pages/CastCrew/CastCrew";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Favorites from "./pages/Favorites/Favorites";

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
      <Route path="/details" element={<Details />} />
      <Route path="/castcrew" element={<CastCrew />} />        
    </Routes>
  </BrowserRouter>
}
