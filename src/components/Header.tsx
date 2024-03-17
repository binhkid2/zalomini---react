import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
const zalo_mini_url = import.meta.env.VITE_ZALO_MINI_APP_ID;
export default function Header() {
  const location = useLocation()
  return (
    <div className="w-full bg-gradient-to-r from-green-400 to-emerald-500 pb-1 ">
      <div className="h-10 flex justify-center">
        <Link to={"/"} className="place-self-center">Sỉ Thủ Công</Link>
      </div>
      {location.pathname === '/' || location.pathname === zalo_mini_url ? (
        <SearchBar />
      ) : (
       <></>
      )}
     
    </div>
  );
}
