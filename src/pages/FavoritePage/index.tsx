import BackHeader from "../../components/BackHeader";
import {
  FavoriteCard,
  FallbackFavoriteCard,
} from "../../components/FavoriteCard";
import Tabs from "../../components/Tabs";
import { useParams } from "react-router-dom";
import { FC, Suspense } from "react";
import { favoriteTabs } from "../../types/favoriteTabs";

const FavoritePageContent: FC = () => {
  const params = useParams();
  return (
    <>
    {params.id}
      <BackHeader />
      <Tabs tabs={favoriteTabs}  />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:w-2/3 gap-2 md:gap-6 grid-flow-row scroll-smooth overflow-auto hide-scrollbar mx-auto">
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
      </div>
    </>
  );
};

const Fallback: FC = () => {
  return (
    <>
      <BackHeader />
      <Tabs tabs={favoriteTabs} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:w-2/3 gap-2 md:gap-6 grid-flow-row scroll-smooth overflow-auto hide-scrollbar mx-auto">
        <FallbackFavoriteCard />
      </div>
    </>
  );
};

export default function FavoritePage ()  {
  return (
    <Suspense fallback={<Fallback />}>
      <FavoritePageContent />
    </Suspense>
  );
}
