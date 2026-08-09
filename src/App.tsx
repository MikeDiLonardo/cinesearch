import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./components/layout/Layout/BaseLayout/BaseLayout";
import HeaderLayout from "./components/layout/Layout/HeaderLayout/HeaderLayout";
import CastCrew from "./pages/CastCrew/CastCrew";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Favorites from "./pages/Favorites/Favorites";

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route element={<BaseLayout />}>

      <Route element={<HeaderLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>

      <Route path="/details" element={<Details />} />
      <Route path="/castcrew" element={<CastCrew />} />        
      
      </Route>
    </Routes>
  </BrowserRouter>
}
