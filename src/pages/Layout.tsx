import { Outlet } from "react-router-dom";
import BottomBar from "../components/BottomBar";

const Layout = () => {
  return (
    <>
      
      <div className="mb-16 md:p-5">
        <Outlet />
        <BottomBar />
      </div>
    </>
  );
};

export default Layout;