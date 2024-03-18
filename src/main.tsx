import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
//import { getSystemInfo } from "zmp-sdk";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import ProfilePage from "./pages/ProfilePage";
import FavoritePage from "./pages/FavoritePage";
import ProductPage from "./pages/ProductPage";
import SearchPage from "./pages/SearchPage";
import ManagePage from "./pages/ManagePage";
import CategoryPage from "./pages/CategoryPage";
import PostPage from "./pages/PostPage";
/*
if (getSystemInfo().platform === "android") {
  const androidSafeTop = Math.round(
    (window as any).ZaloJavaScriptInterface.getStatusBarHeight() /
      window.devicePixelRatio
  );
  document.body.style.setProperty(
    "--zaui-safe-area-inset-top",
    `${androidSafeTop}px`
  );
}
*/
const zalo_mini_url = import.meta.env.VITE_ZALO_MINI_APP_ID;

export default function App() {
  return (
    <BrowserRouter>
    {/* This is a comment inside a JSX element 
    <ScrollRestoration/>
    */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={zalo_mini_url} element={<HomePage />} />
          <Route index element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/manage" element={<ManagePage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
createRoot(document.getElementById("app")!).render(<App />);
