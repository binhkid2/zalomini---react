import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="w-full bg-gradient-to-r from-green-400 to-emerald-500 pb-1 ">
      <div className="h-10 flex justify-center">
        <Link to={"/"} className="place-self-center">Sỉ Thủ Công</Link>
      </div>
      <SearchBar />
    </div>
  );
}
