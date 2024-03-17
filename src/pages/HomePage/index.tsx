import { Link } from "react-router-dom";
import { Categories } from "./Categories";
import { RecentUploaded } from "./RecentUploaded";
import { OtherPeopleLike } from "./OtherPeopleLike";
import { MostView } from "./MostViews";
import { NearBy } from "./NearBy";
import Banner from "../../components/Banner";

export default function HomePage() {
  return (
    <>
    <Banner/>
    <Categories/>
    <RecentUploaded/>
    <OtherPeopleLike/>
    <MostView/>
    <NearBy/>
      <h1 className="text-3xl font-bold underline">HomePage</h1>
      <Link  to={'/test'}>Test Page</Link>
     
    </>
  );
}
