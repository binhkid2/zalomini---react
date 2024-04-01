import { Header } from "zmp-ui";
import SearchBar from "../../components/SearchBar";
import { FC, Suspense } from "react";
//Zalo
import { useAtomValue } from 'jotai'
import { userAtom } from "../../utils/store";
  const HomeHeaderContent: FC = () => {
    const user = useAtomValue(userAtom)
  return (
    <Header
      className=" pl-2  pb-[6px] bg-green-500 fixed top-0 w-full z-50 h-18 "
      showBackIcon={false}
      title={
        (
          <div>
            <div className="flex flex-grow py-3 pl-2 h-18 ">
              <img
                src= {user.avatar} 
                alt="user"
                className="w-8 h-8 "
              />
              <div className="ml-2">
                <h4 className="text-sm">Si Thu Cong</h4>
                <p className="text-xs text-white">Welcome {user.name}</p>
              </div>
            </div>

            <SearchBar />
          </div>
        ) as unknown as string
      }
    />
  );
}


const Fallback: FC = () => {
  return(
    <Header
    className=" pl-2  pb-[6px] bg-green-500"
    showBackIcon={false}
    title={
      (
        <div>
          <div className="flex flex-grow py-3 pl-2">
             {/* Only replace this */}
              <div className="animate-ping w-8 h-8 rounded-full bg-green-600"></div>
            <div className="ml-2">
              <h4 className="text-sm">Si Thu Cong</h4>
              <p className="text-xs text-white">Welcome User</p>
            </div>
          </div>
          <SearchBar />
        </div>
      ) as unknown as string
    }
  />
  )
}

export const HomeHeader: FC = () => {
  return(
    <Suspense fallback={<Fallback />}>
      <HomeHeaderContent />
    </Suspense>
  )
};
