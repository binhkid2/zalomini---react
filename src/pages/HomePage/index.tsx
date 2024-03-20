import { Categories } from "./Categories";
import { RecentUploaded } from "./RecentUploaded";
import { OtherPeopleLike } from "./OtherPeopleLike";
import { MostView } from "./MostViews";
import { NearBy } from "./NearBy";
import FloatButton from "./FloatButton";
import HomeHeader from "./Header";
import Banner from "./Banner";
import Footer1 from "../../components/Footer1";
export default function HomePage() {
  return (
    <>
    <HomeHeader/>
    <FloatButton/>
    <Categories/>
    <RecentUploaded/>
    <Banner/>
    <OtherPeopleLike/>
    <MostView/>
    <NearBy/>
    <Footer1/>
    </>
  );
}
