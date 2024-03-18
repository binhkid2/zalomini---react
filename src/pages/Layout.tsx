import { Outlet } from "react-router-dom";
import BottomBar from "../components/BottomBar";
import { Header } from "zmp-ui";
import SearchBar from "../components/SearchBar";
import Banner from "./HomePage/Banner";
const Layout = () => {
  return (
    <>
      <Header
        className=" pl-2  pb-[6px] bg-green-500"
        showBackIcon={false}
        title={
          (
           <div>
            <div className="flex flex-grow py-3 pl-2">
              <img
                src="https://png.pngtree.com/element_pic/00/16/09/2057e0eecf792fb.jpg"
                alt="user"
                className="w-8 h-8 "
              />
              <div className="ml-2">
                <h4 className="text-sm">Si Thu Cong</h4>
                <p className="text-xs text-white">Welcome Yenvietsoft</p>
              </div>
            </div>

            <SearchBar/>
           </div>
          ) as unknown as string
        }
      />

      <div className="mb-16 p-2 md:p-5">
        <Outlet />
        <BottomBar />
      </div>
    </>
  );
};

export default Layout;
/*

 <div className="flex flex-grow my-2">
            <img src="https://png.pngtree.com/element_pic/00/16/09/2057e0eecf792fb.jpg" alt="user" className="w-8 h-8 "/>
            <div className="ml-2">
            <h4 className="text-sm">Si Thu Cong</h4>
            <p className="text-xs text-gray-600">Welcome Yenvietsoft</p>
            </div>
           </div>
*/
