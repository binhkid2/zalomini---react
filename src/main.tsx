import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import { getSystemInfo } from "zmp-sdk";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import { ScrollRestoration } from "./components/ScrollRestoration";
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
const zalo_mini_url = import.meta.env.VITE_ZALO_MINI_APP_ID;

export default function App() {
  return (
    <BrowserRouter>
    <ScrollRestoration />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={zalo_mini_url} element={<HomePage />} />
          <Route index element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
createRoot(document.getElementById("app")!).render(<App />);
