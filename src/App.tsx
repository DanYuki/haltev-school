import { BrowserRouter, Routes, Route } from "react-router";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import PPDB from "./pages/PPDB";
import Berita from "./pages/Berita";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Route */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/ppdb" element={<PPDB />} />
          <Route path="/berita" element={<Berita />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
