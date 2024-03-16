import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="h-screen p-2 md:p-5">
      <Outlet />
      </div>
    </>
  )
};

export default Layout;
