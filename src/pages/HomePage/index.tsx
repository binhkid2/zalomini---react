import { Link } from "react-router-dom";
import { Categories } from "./Categories";
import { RecentUploaded } from "./RecentUploaded";
import { OtherPeopleLike } from "./OtherPeopleLike";
import { MostView } from "./MostViews";
import { NearBy } from "./NearBy";

export default function HomePage() {
  return (
    <>
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
