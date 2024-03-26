
import BackHeader from "../../components/BackHeader";
import {FavoriteCard} from "../../components/FavoriteCard";
import Tabs from "../../components/Tabs";
export default function FavoritePage  ()  {
  return (
    <>
    <BackHeader />
  <Tabs/>
	<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:w-2/3 gap-2 md:gap-6 grid-flow-row scroll-smooth overflow-auto hide-scrollbar mx-auto">
 <FavoriteCard/>
 <FavoriteCard/>
 <FavoriteCard/>
 <FavoriteCard/>
 <FavoriteCard/>
 <FavoriteCard/>
 <FavoriteCard/>
 <FavoriteCard/>
	</div>

    </>
  );
}




