import { Header } from "zmp-ui";
import SearchBar from "../../components/SearchBar";

export default function HomeHeader() {
  return (
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

            <SearchBar />
          </div>
        ) as unknown as string
      }
    />
  );
}
