import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import { getSystemInfo } from "zmp-sdk";
if (getSystemInfo().platform === "android") {
  const androidSafeTop = Math.round(
    (window as any).ZaloJavaScriptInterface.getStatusBarHeight() /
      window.devicePixelRatio,
  );
  document.body.style.setProperty(
    "--zaui-safe-area-inset-top",
    `${androidSafeTop}px`,
  );
}
const zalo_mini_url=import.meta.env.VITE_ZALO_MINI_APP_ID
const router = createBrowserRouter([
  {
    path: "/",
    element: (<HomePage/> ),
  },
  {
    path: zalo_mini_url,
    element: (<HomePage/> ),
  },
  {
    path: "/test",
    element: (<TestPage/>)
  },
]);

createRoot(document.getElementById("app")!).render(
  <>
  
  <RouterProvider router={router} />
  
  </>
);