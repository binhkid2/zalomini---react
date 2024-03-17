import { Outlet } from "react-router-dom";
import BottomBar from "../components/BottomBar";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
    <Header/>
      <div className="mb-16 p-2 md:p-5">
        <Outlet />
        <BottomBar />
      </div>
    </>
  );
};

export default Layout;
